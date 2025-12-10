"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SkillsForm() {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills"
  });

  return (
    <div className="space-y-4">
      <FormLabel className="font-medium text-lg">Skills</FormLabel>

      {fields.map((field, index) => (
        <FormField
          key={field.id}
          control={control}
          name={`skills.${index}`}
          render={({ field }) => (
            <FormItem className="flex items-center space-x-3">
              <FormControl>
                <Input
                  placeholder={`Skill ${index + 1}`}
                  className="h-10"
                  {...field}
                />
              </FormControl>

              <Button
                type="button"
                variant="destructive"
                onClick={() => remove(index)}
              >
                Remove
              </Button>

              <FormMessage />
            </FormItem>
          )}
        />
      ))}

      <Button
        type="button"
        variant="secondary"
        onClick={() => append("")}
      >
        + Add Skill
      </Button>
    </div>
  );
}
