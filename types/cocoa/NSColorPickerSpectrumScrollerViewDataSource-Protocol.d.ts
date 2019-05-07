/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerSpectrumScrollerViewDataSourceProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    colorListForSpectrumView<R = NSColorList, P0 = NSColorPickerSpectrumScrollerView>(_colorListForSpectrumView: P0): R;
    pageCountForSpectrumView<R = number, P0 = NSColorPickerSpectrumScrollerView>(_pageCountForSpectrumView: P0): R;
    currentPageForSpectrumView<R = number, P0 = NSColorPickerSpectrumScrollerView>(_currentPageForSpectrumView: P0): R;
  }
  namespace NSColorPickerSpectrumScrollerViewDataSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
