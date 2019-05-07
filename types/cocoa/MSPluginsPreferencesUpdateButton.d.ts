/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginsPreferencesUpdateButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    cxx_destruct<R = void>(): R;
    awakeFromNib<R = void>(): R;
    tableCellView<R = MSPluginsPreferenceTableCellView>(): R;
    setTableCellView<R = void, P0 = MSPluginsPreferenceTableCellView>(_v: P0): R;
  }
  namespace MSPluginsPreferencesUpdateButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = MSPluginsPreferencesUpdateButton>(): R;
      new: <R = MSPluginsPreferencesUpdateButton>() => R;
    }
  }
}

declare const MSPluginsPreferencesUpdateButton: cocoa.MSPluginsPreferencesUpdateButton.CLASS;
