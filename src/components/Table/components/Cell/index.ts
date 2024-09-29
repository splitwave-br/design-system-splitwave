import { Date } from "./Date";
import { Price } from "./Price";
import { Badge } from "./Badge";
import { Text } from "./Text";
import { Placeholder } from "./Placeholder";
import { Actions } from "./Actions";
import { Dropdown } from "@/components/Dropdown";
import { Skeleton } from "./Skeleton";

export const Cell = {
  Date,
  Price,
  Badge,
  Text,
  Placeholder,
  Actions,
  ActionItem: Dropdown.Item,

  Skeleton: Skeleton,
};
