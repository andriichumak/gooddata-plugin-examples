// (C) 2019-2021 GoodData Corporation
import React from "react";
import { idRef } from "@gooddata/sdk-model";
import { DashboardStub, IEmbeddedPlugin } from "@gooddata/sdk-ui-loaders";
<<<<<<< HEAD:dashboard-description-plugin/src/harness/PluginLoader.tsx
import PluginFactory from "../dp_dashboard_description_plugin";
=======
import PluginFactory from "../dp_gauge_chart_plugin";
>>>>>>> abd2493 (Renamed gauge plugin, removed hard coded URLs and IDs from .env, updated the  file to avoid warnings during build):gauge_chart_plugin/src/harness/PluginLoader.tsx
import { DEFAULT_DASHBOARD_ID } from "./constants";
import { DashboardConfig } from "@gooddata/sdk-ui-dashboard";

const Plugins: IEmbeddedPlugin[] = [{ factory: PluginFactory }];
const Config: DashboardConfig = {
    mapboxToken: process.env.MAPBOX_TOKEN,
};

export const PluginLoader = (): JSX.Element => {
    return (
        <DashboardStub
            dashboard={idRef(process.env.DASHBOARD_ID ?? DEFAULT_DASHBOARD_ID)}
            loadingMode="staticOnly"
            config={Config}
            extraPlugins={Plugins}
        />
    );
};
