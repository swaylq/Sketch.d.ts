/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportFormatNamingTextField<T0 = void, T1 = void, T2 = void> extends MSTextFieldWithDropDownMenu {
    applyNamingScheme<R = void, P0 = unknown>(_applyNamingScheme: P0): R;
    popupMenu<R = unknown>(): R;
    exportFormats<R = NSArray>(): R;
    setExportFormats<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace MSExportFormatNamingTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSTextFieldWithDropDownMenu {
      alloc<R = MSExportFormatNamingTextField>(): R;
      new: <R = MSExportFormatNamingTextField>() => R;
    }
  }
}

declare const MSExportFormatNamingTextField: cocoa.MSExportFormatNamingTextField.CLASS;
