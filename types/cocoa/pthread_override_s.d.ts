/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface pthread_override_s<T0 = void, T1 = void, T2 = void> {}
  namespace pthread_override_s {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const pthread_override_s: cocoa.pthread_override_s.CLASS;
