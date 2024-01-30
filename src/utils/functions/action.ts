/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
interface GetCmpByAttrProps {
  children: ReactNode;
  attr?: string;
  value: any;
  props?: Record<string, any>;
}

export function getCmpByAttr({ children, attr = 'data-slot', value, props }: GetCmpByAttrProps): ReactNode {
  const cmps = React.Children.toArray(children) as any;
  const cmp = cmps.find((cmp: { props: { [x: string]: any; }; }) => cmp?.props[attr] === value);

  if (cmp) {
    // console.log(`Found component with attr ${attr} and value ${value}`);
    const clonedCmp = React.cloneElement(cmp, props);
    // console.log('Cloned component:', clonedCmp);
    return clonedCmp;
  }

  // console.warn(`No component found with attr ${attr} and value ${value}`);
  return null;
}
