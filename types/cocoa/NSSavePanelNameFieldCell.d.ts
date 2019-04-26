/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSavePanelNameFieldCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {}
  namespace NSSavePanelNameFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = NSSavePanelNameFieldCell>(): R;
      new: <R = NSSavePanelNameFieldCell>() => R;
    }
  }
}

declare const NSSavePanelNameFieldCell: cocoa.NSSavePanelNameFieldCell.CLASS;
