/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportFormatNamingTextFieldCell<T = any> extends MSTextFieldWithDropDownMenuCell {
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    setupExportFormatNamingTextFieldCell<R = void>(): R;
    layerNamePlaceholderWidth<R = number>(): R;
    setLayerNamePlaceholderWidth<R = void, P0 = number>(_v: P0): R;
    isPrefixed<R = boolean>(): R;
    namingScheme<R = number>(): R;
  }
  namespace classes {
    export interface MSExportFormatNamingTextFieldCell<T = any> extends MSTextFieldWithDropDownMenuCell {
      alloc<R = MSExportFormatNamingTextFieldCell>(): R;
      new: <R = MSExportFormatNamingTextFieldCell>() => R;
    }
  }
}

declare const MSExportFormatNamingTextFieldCell: cocoa.classes.MSExportFormatNamingTextFieldCell;
