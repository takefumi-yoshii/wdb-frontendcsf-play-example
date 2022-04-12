import React from "react";
import { useCounter, useTooltipHandler } from "./hooks";
import styles from "./style.module.scss";

export type Props = {
  title: string;
  limit: number;
  describe?: string;
};

export const TextboxWithCounter = ({ title, limit, describe }: Props) => {
  const [isTooltipHidden, tooltipHandlers] = useTooltipHandler();
  const [{ value, isLimitOver }, { handleChange }] = useCounter(limit);
  return (
    <div className={styles.module}>
      <fieldset>
        {describe && (
          <span role="tooltip" aria-hidden={isTooltipHidden}>
            {describe}
          </span>
        )}
        <label>
          <span {...tooltipHandlers}>{title}</span>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            aria-invalid={isLimitOver}
          />
        </label>
      </fieldset>
      <footer>
        {!!isLimitOver && <span role="alert">文字数制限を超えています</span>}
        <span className={isLimitOver ? styles.isLimitOver : undefined}>
          {value.length}/{limit}
        </span>
      </footer>
    </div>
  );
};
