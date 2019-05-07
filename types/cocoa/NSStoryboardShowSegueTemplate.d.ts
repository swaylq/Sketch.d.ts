/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardShowSegueTemplate<T0 = void, T1 = void, T2 = void> extends NSStoryboardSegueTemplate, NSCodingProtocol {
    uniqueControllerIdentifier<R = NSString>(): R;
  }
  namespace NSStoryboardShowSegueTemplate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSStoryboardSegueTemplate, NSCodingProtocol {
      alloc<R = NSStoryboardShowSegueTemplate>(): R;
      new: <R = NSStoryboardShowSegueTemplate>() => R;
    }
  }
}

declare const NSStoryboardShowSegueTemplate: cocoa.NSStoryboardShowSegueTemplate.CLASS;
