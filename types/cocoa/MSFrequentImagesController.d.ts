/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFrequentImagesController<T0 = void, T1 = void, T2 = void> extends MSFrequentObjectsController {
    frequentImagePicked<R = void, P0 = unknown>(_frequentImagePicked: P0): R;
    delegate<R = MSFrequentImagesControllerDelegate>(): R;
    setDelegate<R = void, P0 = MSFrequentImagesControllerDelegate>(_v: P0): R;
  }
  namespace MSFrequentImagesController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSFrequentObjectsController {
      alloc<R = MSFrequentImagesController>(): R;
      new: <R = MSFrequentImagesController>() => R;
      menuItemAttributedTitleForColorCounter<R = unknown, P0 = unknown>(_menuItemAttributedTitleForColorCounter: P0): R;
      menuItemForImageCounter_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_menuItemForImageCounter: P0, _target: P1, _action: P2): R;
      previewImageForImageCounter<R = unknown, P0 = unknown>(_previewImageForImageCounter: P0): R;
    }
  }
}

declare const MSFrequentImagesController: cocoa.MSFrequentImagesController.CLASS;
