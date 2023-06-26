import React from "react";
import { Gantt, DefaultTheme } from "@dhtmlx/trial-react-gantt";

export default function Home() {
  return (
    <div>
      <DefaultTheme>
        <Gantt />
      </DefaultTheme>
    </div>
  )
}
