/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSidebarImage<T0 = void, T1 = void, T2 = void> extends NSImage {
    isTemplate<R = boolean>(): R;
    alignmentRect<R = CGRect>(): R;
    size<R = CGSize>(): R;
    initWithSourceImage<R = unknown, P0 = unknown>(_initWithSourceImage: P0): R;
    sourceImage<R = NSImage>(): R;
    setSourceImage<R = void, P0 = NSImage>(_v: P0): R;
    active<R = boolean>(): R;
    setActive<R = void, P0 = boolean>(_v: P0): R;
    emphasized<R = boolean>(): R;
    setEmphasized<R = void, P0 = boolean>(_v: P0): R;
    selected<R = boolean>(): R;
    setSelected<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSSidebarImage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImage {
      alloc<R = NSSidebarImage>(): R;
      new: <R = NSSidebarImage>() => R;
    }
  }
}

declare const NSSidebarImage: cocoa.NSSidebarImage.CLASS;
