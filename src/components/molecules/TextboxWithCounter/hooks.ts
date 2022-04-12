import React from "react";

export const useCounter = (limit: number) => {
  const [value, setValue] = React.useState("");
  const isLimitOver = React.useMemo(
    () => value.length > limit,
    [value.length, limit]
  );
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value);
    },
    []
  );
  return [{ value, isLimitOver }, { handleChange }] as const;
};

export const useTooltipHandler = () => {
  const [isTooltipHidden, setTooltipHidden] = React.useState(true);
  const onMouseEnter = React.useCallback(() => {
    setTooltipHidden(false);
  }, []);
  const onMouseLeave = React.useCallback(() => {
    setTooltipHidden(true);
  }, []);
  return [isTooltipHidden, { onMouseEnter, onMouseLeave }] as const;
};
