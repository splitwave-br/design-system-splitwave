import styles from "./styles.module.scss";
import { Icon } from "@/components/Icon";
import { DatePicker } from "@/components/DatePicker";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { DateFilterProps } from "./types";
import { useDateFilter } from "./hooks/useDateFilter";

export const DateFilter = ({
  isPeriod,
  formatter,
  label,
  ...props
}: DateFilterProps) => {
  const { isOpen, handleToggle, handlePickDate, buttonLabel } = useDateFilter(
    props,
    isPeriod,
  );

  return (
    <Form.Field className={styles.field}>
      {label && <Form.Label>{label}</Form.Label>}
      <Button
        className={styles.datePickerTrigger}
        variant="outline"
        onClick={handleToggle}
      >
        <Icon name="calendar" size={1} />
        {buttonLabel}
      </Button>
      <DatePicker
        formatter={formatter}
        mode={isPeriod ? "range" : "single"}
        isOpen={isOpen}
        handlePickDate={handlePickDate}
        handleToggle={handleToggle}
      />
    </Form.Field>
  );
};
