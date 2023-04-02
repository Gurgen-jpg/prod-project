import React from "react";

export type SidebarItemType = {
    path: string;
    title: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authonly?: boolean;
}
