/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardModalSegueTemplate<T0 = void, T1 = void, T2 = void> extends NSStoryboardSegueTemplate, NSCodingProtocol {}
  namespace NSStoryboardModalSegueTemplate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSStoryboardSegueTemplate, NSCodingProtocol {
      alloc<R = NSStoryboardModalSegueTemplate>(): R;
      new: <R = NSStoryboardModalSegueTemplate>() => R;
    }
  }
}

declare const NSStoryboardModalSegueTemplate: cocoa.NSStoryboardModalSegueTemplate.CLASS;
