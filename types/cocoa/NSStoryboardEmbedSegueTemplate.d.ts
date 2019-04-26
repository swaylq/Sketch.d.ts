/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardEmbedSegueTemplate<T0 = void, T1 = void, T2 = void> extends NSStoryboardSegueTemplate, NSCodingProtocol {
    containerView<R = NSView>(): R;
    setContainerView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSStoryboardEmbedSegueTemplate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSStoryboardSegueTemplate, NSCodingProtocol {
      alloc<R = NSStoryboardEmbedSegueTemplate>(): R;
      new: <R = NSStoryboardEmbedSegueTemplate>() => R;
    }
  }
}

declare const NSStoryboardEmbedSegueTemplate: cocoa.NSStoryboardEmbedSegueTemplate.CLASS;
