/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface sqlite3_stmt<T0 = void, T1 = void, T2 = void> {}
  namespace sqlite3_stmt {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const sqlite3_stmt: cocoa.sqlite3_stmt.CLASS;
