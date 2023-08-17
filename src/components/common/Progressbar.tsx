export type ProgressbarProps = {
  progress: number;
};
export const Progressbar = ({ progress }: ProgressbarProps) => {
  return (
    <div className="h-3 w-full bg-white rounded-lg">
      <div
        className="h-3 bg-indigo-300 rounded-lg"
        style={{ width: `${progress}%` }}
      >
        <span className="flex items-center justify-center text-xs font-medium text-white">
          {progress}%
        </span>
      </div>
    </div>
  );
};
