/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetPickerHeaderViewDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    assetHeaderViewDidClick<R = void, P0 = MSAssetPickerHeaderView>(_assetHeaderViewDidClick: P0): R;
  }
  namespace MSAssetPickerHeaderViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
