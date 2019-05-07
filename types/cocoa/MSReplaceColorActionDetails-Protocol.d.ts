/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceColorActionDetailsProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    replacementColor<R = MSColor>(): R;
    replaceAlphaOfOriginalColor<R = boolean>(): R;
    originalColor<R = MSColor>(): R;
    ignoreAlphaWhenMatchingOriginalColor<R = boolean>(): R;
  }
  namespace MSReplaceColorActionDetailsProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
