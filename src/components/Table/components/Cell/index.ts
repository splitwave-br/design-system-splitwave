import { Date } from "./Date";
import { Price } from "./Price";
import { Badge } from "./Badge";
import { Text } from "./Text";
import { Image } from "./Image";
import { Placeholder } from "./Placeholder";
import { Actions } from "./Actions";
import { Dropdown } from "@/components/Dropdown";
import { Skeleton } from "./Skeleton";
import { Card } from "./Card";

export const Cell = {
  Date,
  Price,
  Badge,
  Text,
  Image,
  Placeholder,
  Actions,
  Card,
  ActionItem: Dropdown.Item,

  Skeleton: Skeleton,
};
