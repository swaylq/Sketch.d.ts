/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopoverColorWell<T0 = void, T1 = void, T2 = void> extends NSColorWell, NSPopoverDelegateProtocol {
    setColor<R = void, P0 = unknown>(_setColor: P0): R;
    _showPopover<R = void>(): R;
    _drawColor<R = boolean, P0 = boolean>(__drawColor: P0): R;
    _colorSwatchEdgeInsets<R = NSEdgeInsets>(): R;
    setColorMatrixColorList<R = void, P0 = unknown>(_setColorMatrixColorList: P0): R;
    setTopBarMatrixColorList<R = void, P0 = unknown>(_setTopBarMatrixColorList: P0): R;
    controlSize<R = number>(): R;
    setControlSize<R = void, P0 = number>(_setControlSize: P0): R;
    _commonInit<R = void>(): R;
    _bezelRenderingButton<R = unknown>(): R;
    afterRenderer<R = CDUnknownBlockType>(): R;
    setAfterRenderer<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    hasNoSelection<R = boolean>(): R;
    setHasNoSelection<R = void, P0 = boolean>(_v: P0): R;
    emptyColorEnabled<R = boolean>(): R;
    setEmptyColorEnabled<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSPopoverColorWell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColorWell, NSPopoverDelegateProtocol {
      alloc<R = NSPopoverColorWell>(): R;
      new: <R = NSPopoverColorWell>() => R;
      nullColor<R = unknown>(): R;
      emptyColor<R = unknown>(): R;
      drawNoColorSwatchInRect_enabled_active<R = void, P0 = CGRect, P1 = boolean, P2 = boolean>(_drawNoColorSwatchInRect: P0, _enabled: P1, _active: P2): R;
      drawEmptyColorSwatchInRect_enabled<R = void, P0 = CGRect, P1 = boolean>(_drawEmptyColorSwatchInRect: P0, _enabled: P1): R;
      _colorPopoverCreateIfNecessary<R = unknown, P0 = boolean>(__colorPopoverCreateIfNecessary: P0): R;
    }
  }
}

declare const NSPopoverColorWell: cocoa.NSPopoverColorWell.CLASS;
