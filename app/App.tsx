import {
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Layers,
  Plus,
  Search,
  Target,
  Trash2,
  User,
} from "lucide-react";
import { dsaSteps, type Step } from "../data/dsa-questions";

type ProgressStore = {
  profiles: string[];
  activeProfile: string;
  progressByProfile: Record<string, Record<number, boolean>>;
};

const STORAGE_KEY = "dsa-progress-v2";
const DEFAULT_PROFILE = "Guest";

const createDefaultStore = (): ProgressStore => ({
  profiles: [DEFAULT_PROFILE],
  activeProfile: DEFAULT_PROFILE,
  progressByProfile: { [DEFAULT_PROFILE]: {} },
});

const loadStore = (): ProgressStore => {
  if (typeof window === "undefined") {
    return createDefaultStore();
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return createDefaultStore();
  }

  try {
    const parsed = JSON.parse(raw) as ProgressStore;
    if (
      !parsed ||
      !Array.isArray(parsed.profiles) ||
      typeof parsed.activeProfile !== "string"
    ) {
      return createDefaultStore();
    }

    const profiles = parsed.profiles.length
      ? parsed.profiles
      : [DEFAULT_PROFILE];
    const activeProfile = profiles.includes(parsed.activeProfile)
      ? parsed.activeProfile
      : profiles[0];
    const progressByProfile =
      parsed.progressByProfile && typeof parsed.progressByProfile === "object"
        ? parsed.progressByProfile
        : {};

    if (!progressByProfile[activeProfile]) {
      progressByProfile[activeProfile] = {};
    }

    return { profiles, activeProfile, progressByProfile };
  } catch {
    return createDefaultStore();
  }
};

const buildStepsFromProgress = (progress: Record<number, boolean>) =>
  dsaSteps.map((step) => ({
    ...step,
    topics: step.topics.map((topic) => ({
      ...topic,
      problems: topic.problems.map((problem) => ({
        ...problem,
        completed: progress[problem.id] || false,
      })),
    })),
  }));

const extractProgress = (steps: Step[]) => {
  const progress: Record<number, boolean> = {};
  steps.forEach((step) => {
    step.topics.forEach((topic) => {
      topic.problems.forEach((problem) => {
        if (problem.completed) {
          progress[problem.id] = true;
        }
      });
    });
  });
  return progress;
};

const difficultyStyles: Record<string, string> = {
  Easy: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  Medium: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  Hard: "border-rose-500/40 bg-rose-500/10 text-rose-300",
};

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/40 px-4 py-3 shadow-[0_0_25px_rgba(15,23,42,0.5)]">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/70 text-cyan-300">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
          {label}
        </p>
        <p className="text-xl font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [store, setStore] = useState<ProgressStore>(() => loadStore());
  const [steps, setSteps] = useState<Step[]>(() =>
    buildStepsFromProgress(
      store.progressByProfile[store.activeProfile] || {},
    ),
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [platformFilter, setPlatformFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [newProfileName, setNewProfileName] = useState("");
  const [profileError, setProfileError] = useState("");

  useEffect(() => {
    setSteps(
      buildStepsFromProgress(
        store.progressByProfile[store.activeProfile] || {},
      ),
    );
  }, [store.activeProfile]);

  useEffect(() => {
    setStore((prev) => ({
      ...prev,
      progressByProfile: {
        ...prev.progressByProfile,
        [prev.activeProfile]: extractProgress(steps),
      },
    }));
  }, [steps]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }, [store]);

  const handleToggleComplete = (problemId: number) => {
    setSteps((prev) =>
      prev.map((step) => ({
        ...step,
        topics: step.topics.map((topic) => ({
          ...topic,
          problems: topic.problems.map((problem) =>
            problem.id === problemId
              ? { ...problem, completed: !problem.completed }
              : problem,
          ),
        })),
      })),
    );
  };

  const handleProfileChange = (value: string) => {
    setStore((prev) => ({
      ...prev,
      activeProfile: value,
    }));
  };

  const handleAddProfile = () => {
    const trimmed = newProfileName.trim();
    if (!trimmed) {
      setProfileError("Add a profile name.");
      return;
    }

    if (
      store.profiles.some(
        (profile) => profile.toLowerCase() === trimmed.toLowerCase(),
      )
    ) {
      setProfileError("Profile already exists.");
      return;
    }

    setStore((prev) => ({
      ...prev,
      profiles: [...prev.profiles, trimmed],
      activeProfile: trimmed,
      progressByProfile: {
        ...prev.progressByProfile,
        [trimmed]: {},
      },
    }));
    setNewProfileName("");
    setProfileError("");
  };

  const handleRemoveProfile = () => {
    if (store.profiles.length === 1) {
      return;
    }

    setStore((prev) => {
      const nextProfiles = prev.profiles.filter(
        (profile) => profile !== prev.activeProfile,
      );
      const nextActive = nextProfiles[0] || DEFAULT_PROFILE;
      const nextProgress = { ...prev.progressByProfile };
      delete nextProgress[prev.activeProfile];
      return {
        profiles: nextProfiles,
        activeProfile: nextActive,
        progressByProfile: nextProgress,
      };
    });
  };

  const handleResetProgress = () => {
    setSteps(buildStepsFromProgress({}));
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setDifficultyFilter("all");
    setPlatformFilter("all");
    setStatusFilter("all");
  };

  const filteredSteps = useMemo(() => {
    return steps
      .map((step) => ({
        ...step,
        topics: step.topics
          .map((topic) => ({
            ...topic,
            problems: topic.problems.filter((problem) => {
              const matchesSearch =
                searchTerm === "" ||
                problem.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());

              const matchesDifficulty =
                difficultyFilter === "all" ||
                problem.difficulty === difficultyFilter;

              const matchesPlatform =
                platformFilter === "all" ||
                (platformFilter === "leetcode" && problem.leetcode) ||
                (platformFilter === "gfg" && problem.gfg);

              const matchesStatus =
                statusFilter === "all" ||
                (statusFilter === "completed" && problem.completed) ||
                (statusFilter === "pending" && !problem.completed);

              return (
                matchesSearch &&
                matchesDifficulty &&
                matchesPlatform &&
                matchesStatus
              );
            }),
          }))
          .filter((topic) => topic.problems.length > 0),
      }))
      .filter((step) => step.topics.length > 0);
  }, [steps, searchTerm, difficultyFilter, platformFilter, statusFilter]);

  const totalProblems = useMemo(() => {
    return steps.reduce(
      (sum, step) =>
        sum +
        step.topics.reduce(
          (topicSum, topic) => topicSum + topic.problems.length,
          0,
        ),
      0,
    );
  }, [steps]);

  const completedProblems = useMemo(() => {
    return steps.reduce(
      (sum, step) =>
        sum +
        step.topics.reduce(
          (topicSum, topic) =>
            topicSum + topic.problems.filter((p) => p.completed).length,
          0,
        ),
      0,
    );
  }, [steps]);

  const filteredCount = useMemo(() => {
    return filteredSteps.reduce(
      (sum, step) =>
        sum +
        step.topics.reduce(
          (topicSum, topic) => topicSum + topic.problems.length,
          0,
        ),
      0,
    );
  }, [filteredSteps]);

  const completionRate =
    totalProblems === 0 ? 0 : (completedProblems / totalProblems) * 100;

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.22),transparent_65%)] blur-2xl" />
          <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.18),transparent_65%)] blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 md:px-6 lg:px-10">
          <header className="flex flex-col gap-8 animate-fade-up">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-emerald-400 shadow-[0_0_25px_rgba(56,189,248,0.35)]">
                    <BookOpen className="h-6 w-6 text-slate-950" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
                      DSA Control Room
                    </p>
                    <h1 className="text-4xl font-semibold text-white md:text-5xl">
                      DSA Atlas
                    </h1>
                  </div>
                </div>
                <p className="max-w-2xl text-base text-slate-300 md:text-lg">
                  A focused workspace to master data structures and algorithms.
                  Track progress per profile, filter fast, and keep momentum
                  across every step.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <StatCard
                  label="Total"
                  value={totalProblems.toString()}
                  icon={<Layers className="h-5 w-5" />}
                />
                <StatCard
                  label="Completed"
                  value={completedProblems.toString()}
                  icon={<CheckCircle2 className="h-5 w-5" />}
                />
                <StatCard
                  label="Progress"
                  value={`${completionRate.toFixed(1)}%`}
                  icon={<Target className="h-5 w-5" />}
                />
              </div>
            </div>
          </header>

          <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
            <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
              <section className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 shadow-[0_0_30px_rgba(15,23,42,0.55)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-cyan-200">
                    <User className="h-4 w-4" />
                    <span className="uppercase tracking-[0.2em]">
                      Profiles
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    Saved locally
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <label className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Active profile
                  </label>
                  <select
                    value={store.activeProfile}
                    onChange={(event) =>
                      handleProfileChange(event.target.value)
                    }
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400/60"
                  >
                    {store.profiles.map((profile) => (
                      <option
                        key={profile}
                        value={profile}
                        className="bg-slate-950"
                      >
                        {profile}
                      </option>
                    ))}
                  </select>

                  <div className="flex gap-2">
                    <input
                      value={newProfileName}
                      onChange={(event) => {
                        setNewProfileName(event.target.value);
                        if (profileError) {
                          setProfileError("");
                        }
                      }}
                      placeholder="New profile name"
                      className="flex-1 rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400/60"
                    />
                    <button
                      type="button"
                      onClick={handleAddProfile}
                      className="flex items-center gap-2 rounded-xl bg-cyan-400/20 px-3 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/30"
                    >
                      <Plus className="h-4 w-4" />
                      Add
                    </button>
                  </div>
                  {profileError ? (
                    <p className="text-xs text-rose-300">{profileError}</p>
                  ) : null}

                  <button
                    type="button"
                    onClick={handleRemoveProfile}
                    disabled={store.profiles.length === 1}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-rose-500/30 px-3 py-2 text-xs uppercase tracking-[0.2em] text-rose-200 transition hover:bg-rose-500/10 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove profile
                  </button>
                </div>
              </section>

              <section className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 shadow-[0_0_30px_rgba(15,23,42,0.55)]">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Filters
                  </p>
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="text-xs text-cyan-200 underline-offset-4 transition hover:text-cyan-100 hover:underline"
                  >
                    Clear
                  </button>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <label className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      Search
                    </label>
                    <div className="relative mt-2">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        type="search"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="Search problems"
                        className="w-full rounded-xl border border-slate-800 bg-slate-950/70 py-2 pl-9 pr-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      Difficulty
                    </label>
                    <select
                      value={difficultyFilter}
                      onChange={(event) =>
                        setDifficultyFilter(event.target.value)
                      }
                      className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400/60"
                    >
                      <option value="all">All</option>
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      Platform
                    </label>
                    <select
                      value={platformFilter}
                      onChange={(event) =>
                        setPlatformFilter(event.target.value)
                      }
                      className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400/60"
                    >
                      <option value="all">All</option>
                      <option value="leetcode">LeetCode</option>
                      <option value="gfg">GeeksforGeeks</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      Status
                    </label>
                    <select
                      value={statusFilter}
                      onChange={(event) => setStatusFilter(event.target.value)}
                      className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400/60"
                    >
                      <option value="all">All</option>
                      <option value="completed">Completed</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 shadow-[0_0_30px_rgba(15,23,42,0.55)]">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Actions
                </p>
                <div className="mt-4 space-y-3">
                  <button
                    type="button"
                    onClick={handleResetProgress}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200"
                  >
                    Reset active progress
                  </button>
                  <div className="text-xs text-slate-400">
                    Progress is stored per profile in your browser.
                  </div>
                </div>
              </section>
            </aside>

            <main className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/40 px-5 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Roadmap
                  </p>
                  <h2 className="text-xl font-semibold text-white">
                    {filteredCount} problems shown
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="rounded-full border border-slate-700 px-3 py-1">
                    {completedProblems} completed
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1">
                    {totalProblems - completedProblems} remaining
                  </span>
                </div>
              </div>

              {filteredSteps.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/40 px-6 py-12 text-center">
                  <p className="text-lg text-slate-300">
                    No problems match your filters.
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Try clearing a filter or searching a different keyword.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredSteps.map((step, stepIndex) => {
                    const stepTotal = step.topics.reduce(
                      (sum, topic) => sum + topic.problems.length,
                      0,
                    );
                    const stepCompleted = step.topics.reduce(
                      (sum, topic) =>
                        sum +
                        topic.problems.filter((problem) => problem.completed)
                          .length,
                      0,
                    );

                    return (
                      <details
                        key={step.id}
                        open
                        style={{
                          animationDelay: `${stepIndex * 60}ms`,
                        }}
                        className="group animate-fade-up rounded-2xl border border-slate-800/80 bg-slate-900/40 shadow-[0_0_30px_rgba(15,23,42,0.55)]"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800/70 text-cyan-200">
                              <Layers className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">
                                {step.title}
                              </h3>
                              <p className="text-xs text-slate-400">
                                {step.topics.length} topics
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-slate-300">
                            <span className="rounded-full border border-slate-700 px-3 py-1">
                              {stepCompleted}/{stepTotal}
                            </span>
                            <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                          </div>
                        </summary>

                        <div className="space-y-4 px-6 pb-6">
                          {step.topics.map((topic, index) => {
                            const topicCompleted = topic.problems.filter(
                              (problem) => problem.completed,
                            ).length;
                            const topicProgress =
                              topic.problems.length === 0
                                ? 0
                                : (topicCompleted / topic.problems.length) *
                                  100;

                            return (
                              <div
                                key={topic.id}
                                className="rounded-2xl border border-slate-800/70 bg-slate-950/50 p-4"
                              >
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <div>
                                    <p className="text-base font-semibold text-white">
                                      {topic.name}
                                    </p>
                                    <p className="text-xs text-slate-400">
                                      {topicCompleted}/{topic.problems.length}{" "}
                                      completed
                                    </p>
                                  </div>
                                  <span className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                                    Topic {index + 1}
                                  </span>
                                </div>
                                <div className="mt-3 h-2 w-full rounded-full bg-slate-800">
                                  <div
                                    className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 transition-all"
                                    style={{ width: `${topicProgress}%` }}
                                  />
                                </div>

                                <div className="mt-4 space-y-3">
                                  {topic.problems.map((problem) => (
                                    <div
                                      key={problem.id}
                                      className={`flex flex-col gap-3 rounded-xl border px-4 py-3 transition hover:border-cyan-400/40 ${
                                        problem.completed
                                          ? "border-emerald-500/30 bg-emerald-500/10"
                                          : "border-slate-800/70 bg-slate-900/50"
                                      }`}
                                    >
                                      <div className="flex items-start gap-3">
                                        <input
                                          type="checkbox"
                                          checked={problem.completed || false}
                                          onChange={() =>
                                            handleToggleComplete(problem.id)
                                          }
                                          className="mt-1 h-4 w-4 accent-cyan-400"
                                        />
                                        <div className="flex-1">
                                          <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h4 className="text-sm font-medium text-slate-100 md:text-base">
                                              {problem.name}
                                            </h4>
                                            {problem.completed ? (
                                              <span className="text-xs text-emerald-300">
                                                Done
                                              </span>
                                            ) : null}
                                          </div>
                                          <div className="mt-2 flex flex-wrap gap-2">
                                            <span
                                              className={`rounded-full border px-2.5 py-1 text-xs ${difficultyStyles[problem.difficulty]}`}
                                            >
                                              {problem.difficulty}
                                            </span>
                                            {problem.leetcode ? (
                                              <a
                                                href={problem.leetcode}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="rounded-full border border-orange-400/30 bg-orange-400/10 px-2.5 py-1 text-xs text-orange-200 transition hover:border-orange-300/60"
                                              >
                                                LeetCode
                                              </a>
                                            ) : null}
                                            {problem.gfg ? (
                                              <a
                                                href={problem.gfg}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-200 transition hover:border-emerald-300/60"
                                              >
                                                GeeksforGeeks
                                              </a>
                                            ) : null}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </details>
                    );
                  })}
                </div>
              )}
            </main>
          </div>

          <footer className="flex flex-col gap-2 border-t border-slate-800/60 pt-8 text-sm text-slate-500">
            <div className="flex items-center gap-2 text-cyan-200">
              <Target className="h-4 w-4" />
              <span>Built for daily momentum and clear milestones.</span>
            </div>
            <p>
              Source roadmap: Striver A2Z sheet. Customize freely for your own
              path.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
