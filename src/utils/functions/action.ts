import React, { ReactNode } from "react";

interface GetCmpByAttrProps {
    children: ReactNode;
    attr: string;
    value: any;
    props?: Record<string, any>;
}

export function getCmpByAttr({ children, attr, value, props }: GetCmpByAttrProps): ReactNode {
    const cmps = React.Children.toArray(children);
    const cmp = cmps.find((cmp) => cmp.props[attr] === value);
  
    if (cmp) {
    //   console.log(`Found component with attr ${attr} and value ${value}`);
      const clonedCmp = React.cloneElement(cmp, props);
    //   console.log('Cloned component:', clonedCmp);
      return clonedCmp;
    }
  
    // console.warn(`No component found with attr ${attr} and value ${value}`);
    return null;
  }
  