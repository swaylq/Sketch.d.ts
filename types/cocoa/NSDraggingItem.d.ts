/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDraggingItem<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    setDraggingFrame_contents<R = void, P0 = CGRect, P1 = unknown>(_setDraggingFrame: P0, _contents: P1): R;
    dealloc<R = void>(): R;
    initWithPasteboardWriter_frame_contents<R = unknown, P0 = unknown, P1 = CGRect, P2 = unknown>(_initWithPasteboardWriter: P0, _frame: P1, _contents: P2): R;
    setItem<R = void, P0 = unknown>(_setItem: P0): R;
    initWithPasteboardWriter<R = unknown, P0 = unknown>(_initWithPasteboardWriter: P0): R;
    item<R = unknown>(): R;
    imageComponentsProvider<R = CDUnknownBlockType>(): R;
    setImageComponentsProvider<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    imageComponents<R = NSArray>(): R;
    setImageComponents<R = void, P0 = NSArray>(_v: P0): R;
    draggingFrame<R = CGRect>(): R;
    setDraggingFrame<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace NSDraggingItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDraggingItem>(): R;
      new: <R = NSDraggingItem>() => R;
    }
  }
}

declare const NSDraggingItem: cocoa.NSDraggingItem.CLASS;
