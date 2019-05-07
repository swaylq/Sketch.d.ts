/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetsViewControllerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    artboardPresetsViewController_didSelectPreset<R = void, P0 = MSArtboardPresetsViewController, P1 = MSArtboardPreset>(_artboardPresetsViewController: P0, _didSelectPreset: P1): R;
    showCustomPresetSheet<R = void, P0 = MSArtboardPresetsViewController>(_showCustomPresetSheet: P0): R;
    artboardPresetsViewController_didSelectOrientation<R = void, P0 = MSArtboardPresetsViewController, P1 = number>(_artboardPresetsViewController: P0, _didSelectOrientation: P1): R;
  }
  namespace MSArtboardPresetsViewControllerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
