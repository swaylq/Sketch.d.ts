/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentTextAttachmentScrollView<T0 = void, T1 = void, T2 = void> extends NSScrollView {
    toggleExpanded<R = void, P0 = unknown>(_toggleExpanded: P0): R;
    setExpanded<R = void, P0 = boolean>(_setExpanded: P0): R;
    setCharacterIndex_layoutManager<R = void, P0 = number, P1 = unknown>(_setCharacterIndex: P0, _layoutManager: P1): R;
    setExpandedView<R = void, P0 = unknown>(_setExpandedView: P0): R;
    expandedView<R = unknown>(): R;
    setImage<R = void, P0 = unknown>(_setImage: P0): R;
    image<R = unknown>(): R;
    charIndex<R = number>(): R;
    layoutManager<R = unknown>(): R;
    isExpanded<R = boolean>(): R;
  }
  namespace NSDocumentTextAttachmentScrollView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrollView {
      alloc<R = NSDocumentTextAttachmentScrollView>(): R;
      new: <R = NSDocumentTextAttachmentScrollView>() => R;
    }
  }
}

declare const NSDocumentTextAttachmentScrollView: cocoa.NSDocumentTextAttachmentScrollView.CLASS;
