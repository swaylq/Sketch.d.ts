/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCandidateTextCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {}
  namespace NSCandidateTextCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = NSCandidateTextCell>(): R;
      new: <R = NSCandidateTextCell>() => R;
    }
  }
}

declare const NSCandidateTextCell: cocoa.NSCandidateTextCell.CLASS;
