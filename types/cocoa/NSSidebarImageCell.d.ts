/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSidebarImageCell<T0 = void, T1 = void, T2 = void> extends NSImageCell {}
  namespace NSSidebarImageCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageCell {
      alloc<R = NSSidebarImageCell>(): R;
      new: <R = NSSidebarImageCell>() => R;
    }
  }
}

declare const NSSidebarImageCell: cocoa.NSSidebarImageCell.CLASS;
