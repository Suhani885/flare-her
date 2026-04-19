"use client";

import { ConfigProvider } from "antd";

export function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#db2d6e",
          colorSuccess: "#4c9d4c",
          colorWarning: "#d97706",
          colorError: "#db2d6e",
          colorInfo: "#379aad",
          colorBgBase: "#ffffff",
          colorBorder: "#e7e5e4",
          colorText: "#292524",
          colorTextSecondary: "#57534e",
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
            labelColor: "#57534e",
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