/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetPickerHeaderView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    titleButtonWasClicked<R = void, P0 = unknown>(_titleButtonWasClicked: P0): R;
    expandArrowWasClicked<R = void, P0 = unknown>(_expandArrowWasClicked: P0): R;
    disclosureButton<R = unknown>(): R;
    preferenceKey<R = NSString>(): R;
    setPreferenceKey<R = void, P0 = NSString>(_v: P0): R;
    delegate<R = MSAssetPickerHeaderViewDelegate>(): R;
    setDelegate<R = void, P0 = MSAssetPickerHeaderViewDelegate>(_v: P0): R;
  }
  namespace MSAssetPickerHeaderView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSAssetPickerHeaderView>(): R;
      new: <R = MSAssetPickerHeaderView>() => R;
      headerPickerWithTitle_isExpandedPreference_delegate<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_headerPickerWithTitle: P0, _isExpandedPreference: P1, _delegate: P2): R;
    }
  }
}

declare const MSAssetPickerHeaderView: cocoa.MSAssetPickerHeaderView.CLASS;
