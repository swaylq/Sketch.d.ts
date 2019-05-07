/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitlebarFloatingWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    _renamingDidEndNormally<R = void, P0 = boolean>(__renamingDidEndNormally: P0): R;
    _titlebarEditingDidEndNormally_title_editingRange_grantHandler<R = void, P0 = boolean, P1 = unknown, P2 = _NSRange, P3 = CDUnknownBlockType>(__titlebarEditingDidEndNormally: P0, _title: P1, _editingRange: P2, _grantHandler: P3): R;
    _editingModeForTitle_editingRange_selectedRange<R = number, P0 = unknown, P1 = _NSRange, P2 = _NSRange>(__editingModeForTitle: P0, _editingRange: P1, _selectedRange: P2): R;
    _ignoreForFullScreenTransition<R = boolean>(): R;
    _setWindowTag<R = void>(): R;
    _keyViewLoopsMayCrossWindows<R = boolean>(): R;
    _hasActiveAppearanceIgnoringKeyFocus<R = boolean>(): R;
    isExcludedFromWindowsMenu<R = boolean>(): R;
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    _usesCustomDrawing<R = boolean>(): R;
    _titlebarRenamingShouldBeInWindow<R = boolean>(): R;
    representedURL<R = unknown>(): R;
    representedFilename<R = unknown>(): R;
    _titleMightBeEditable<R = boolean>(): R;
    setMenuBarRevealedValue<R = void, P0 = number>(_setMenuBarRevealedValue: P0): R;
    initWithContentRect_styleMask_backing_defer<R = unknown, P0 = CGRect, P1 = number, P2 = number, P3 = boolean>(_initWithContentRect: P0, _styleMask: P1, _backing: P2, _defer: P3): R;
    originalWindow<R = NSWindow>(): R;
    setOriginalWindow<R = void, P0 = NSWindow>(_v: P0): R;
  }
  namespace NSTitlebarFloatingWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSTitlebarFloatingWindow>(): R;
      new: <R = NSTitlebarFloatingWindow>() => R;
      frameViewClassForStyleMask<R = unknown, P0 = number>(_frameViewClassForStyleMask: P0): R;
      frameRectForContentRect_styleMask<R = CGRect, P0 = CGRect, P1 = number>(_frameRectForContentRect: P0, _styleMask: P1): R;
    }
  }
}

declare const NSTitlebarFloatingWindow: cocoa.NSTitlebarFloatingWindow.CLASS;
