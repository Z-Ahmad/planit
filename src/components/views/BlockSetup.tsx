import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { useTimeBlocks, useTimeBlockActions } from "../../stores/time-blocks";
import { useNavigationActions } from "../../stores/navigation";
import { DayOfWeek } from "../../stores/time-blocks";

type FormValues = {
  name: string;
  start: string;
  end: string;
  days: DayOfWeek[];
};

const calculateDuration = (start: string, end: string): string => {
  const [startHours, startMinutes] = start.split(':').map(Number);
  const [endHours, endMinutes] = end.split(':').map(Number);
  
  let durationMinutes = (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes);
  // Handle cases where end time is on the next day
  if (durationMinutes < 0) durationMinutes += 24 * 60;
  
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;
  
  return `${hours}h${minutes ? ` ${minutes}m` : ''}`;
};

export const BlockSetup = () => {
  const { register, handleSubmit, formState: { errors }, getValues, setValue, reset, watch } = useForm<FormValues>();
  const blocks = useTimeBlocks();
  const { addBlock, removeBlock } = useTimeBlockActions();
  const { goToIntro } = useNavigationActions();

  const daysOfWeek: DayOfWeek[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  // Watch the start and end times
  const startTime = watch('start');
  const endTime = watch('end');

  const onSubmit = (data: FormValues) => {
    addBlock({
      name: data.name,
      start: data.start,
      end: data.end,
      days: data.days
    });
    reset();
  };

  return (
    <motion.div className="flex flex-col gap-6 max-w-lg w-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold text-royal-purple">Set Your Fixed Commitments</h1>
        <p className="text-text-primary/80">Tell us about your regular obligations (work, school, etc.)</p>
      </div>

      {blocks.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Current Commitments</h2>
          <div className="space-y-2">
            {blocks.map((block) => (
              <div key={block.id} className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                <div>
                  <h3 className="font-medium text-lg text-violet-400 mb-1">{block.name}</h3>
                  <p className="text-sm text-text-primary/70">
                    {block.start} - {block.end} ({calculateDuration(block.start, block.end)}) • {block.days.map((d) => d.toUpperCase()).join(", ")}
                  </p>
                </div>
                <button onClick={() => removeBlock(block.id)} className="btn btn-error btn-sm text-error">
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="divider"/>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="form-control flex flex-col gap-2">
          <label className="label" htmlFor="name">
            <span className="label-text text-lg font-semibold text-violet-400">Commitment Name</span>
          </label>
          <input
            {...register("name", { required: true })}
            className={`input input-bordered ${errors.name ? "border-error" : ""}`}
            id="name"
            placeholder="e.g. Work, School, Gym"
          />
          {errors.name && <span className="text-error">Commitment name is required</span>}
        </div>

        <div className="flex gap-4">
          <div className="form-control flex-1">
            <label className="label mb-1" htmlFor="start-time">
              <span className="label-text text-lg font-semibold text-violet-400">Start Time</span>
            </label>
            <input
              {...register("start", { required: true })}
              type="time"
              id="start-time"
              className={`input input-bordered ${errors.start ? "border-error" : ""}`}
              onChange={(e) => {
                register("start").onChange(e);
                if (getValues("end")) {
                  setValue("end", getValues("end"));
                }
              }}
            />
          </div>

          <div className="form-control flex-1">
            <label className="label mb-1" htmlFor="end-time">
              <span className="label-text text-lg font-semibold text-violet-400">End Time</span>
            </label>
            <input 
              {...register("end", { required: true })} 
              type="time" 
              id="end-time" 
              className={`input input-bordered ${errors.end ? "border-error" : ""}`} 
            />
          </div>
        </div>

        {startTime && endTime && (
          <div className="text-sm text-text-primary/70 -mt-2">
            Duration: {calculateDuration(startTime, endTime)}
          </div>
        )}

        <div className="form-control">
          <label className="label" htmlFor="end-time">
            <span className="label-text text-lg font-semibold text-violet-400 mb-2">Days of the Week</span>
          </label>
          <div className="flex flex-wrap justify-around gap-4">
            {daysOfWeek.map((day) => (
                <label key={day} className="cursor-pointer label gap-1">
                <input
                  type="checkbox"
                  value={day}
                  id={`day-${day}`}
                  {...register("days", { required: true })}
                  className="checkbox checkbox-primary checkbox-md"
                />
                <span className="label-text capitalize">{day}</span>
                </label>
            ))}
          </div>
          {errors.days && <span className="text-error">Select at least one day</span>}
        </div>

        <div className="flex justify-end gap-2">
          <button type="submit" className="btn btn-primary">
            Add Commitment
          </button>
        </div>
      </form>
        <button className="btn bg-royal-purple! text-white" onClick={goToIntro}>
          Back
        </button>
    </motion.div>
  );
};
