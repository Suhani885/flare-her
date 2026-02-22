"use client";

import { ConfigProvider, theme as antdTheme } from "antd";
import { useThemeMode } from "./theme-provider";

export function AntdProvider({ children }: { children: React.ReactNode }) {
  const { isDark } = useThemeMode();

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark
          ? antdTheme.darkAlgorithm
          : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: "#db2d6e",
          colorSuccess: "#4c9d4c",
          colorWarning: "#d97706",
          colorError: "#db2d6e",
          colorInfo: "#379aad",
          colorBgBase: isDark ? "#0a0a0a" : "#ffffff",
          colorBorder: isDark ? "#262626" : "#e7e5e4",
          colorText: isDark ? "#f5f5f5" : "#292524",
          colorTextSecondary: isDark ? "#d4d4d4" : "#57534e",
          borderRadius: 8,
          fontFamily: "var(--font-inter)",
        },
        components: {
          Button: {
            controlHeight: 40,
            borderRadius: 8,
            primaryColor: "#db2d6e",
          },
          Input: {
            controlHeight: 40,
            borderRadius: 8,
          },
          Select: {
            controlHeight: 40,
            borderRadius: 8,
          },
          Card: {
            borderRadiusLG: 12,
          },
          Form: {
            labelColor: isDark ? "#d4d4d4" : "#57534e",
          },
          Table: {
            borderRadius: 12,
          },
          Upload: {
            borderRadius: 8,
          },
          Modal: {
            borderRadiusLG: 12,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}