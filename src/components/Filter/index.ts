"use client";

import { Responsive } from "./components/Responsive";
import { Container } from "@/components/Filter/components/Container";
import { Button } from "@/components/Filter/components/Button";
import { Field } from "@/components/Filter/components/Field";
import { Select } from "@/components/Filter/components/Select";
import { Content } from "@/components/Filter/components/Content";
import { Wrapper } from "@/components/Filter/components/Wrapper";
import { Sort } from "./components/Sort";
import { CheckboxFilters } from "./components/Checkboxes";
import { DateFilter } from "./components/Date";

export const Filter = {
  Container,
  Button,
  Content,
  Wrapper,
  Responsive,

  // Fields
  Field,
  Select,
  Check: CheckboxFilters,
  Sort,
  Date: DateFilter,
};
