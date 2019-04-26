/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPanelFavoritesList<T0 = void, T1 = void, T2 = void> extends NSView, NSUserInterfaceValidationsProtocol, NSCollectionViewDelegateProtocol, NSCollectionViewDataSourceProtocol {
    storeIndexForColorIndex<R = number, P0 = number>(_storeIndexForColorIndex: P0): R;
    _favoritesDidChange<R = void, P0 = unknown>(__favoritesDidChange: P0): R;
    setSavedColors<R = void, P0 = unknown>(_setSavedColors: P0): R;
    savedColors<R = unknown>(): R;
    _selectColorSwatch<R = void, P0 = unknown>(__selectColorSwatch: P0): R;
    _commonInit<R = void>(): R;
    insertNewlineIgnoringFieldEditor<R = void, P0 = unknown>(_insertNewlineIgnoringFieldEditor: P0): R;
    insertNewline<R = void, P0 = unknown>(_insertNewline: P0): R;
    performClick<R = void, P0 = unknown>(_performClick: P0): R;
    _activateSelectedColor<R = void>(): R;
    paste<R = void, P0 = unknown>(_paste: P0): R;
    cut<R = void, P0 = unknown>(_cut: P0): R;
    copy<R = void, P0 = unknown>(_copy: P0): R;
    delete<R = void, P0 = unknown>(_delete: P0): R;
    deleteToEndOfParagraph<R = void, P0 = unknown>(_deleteToEndOfParagraph: P0): R;
    deleteToBeginningOfParagraph<R = void, P0 = unknown>(_deleteToBeginningOfParagraph: P0): R;
    deleteToEndOfLine<R = void, P0 = unknown>(_deleteToEndOfLine: P0): R;
    deleteToBeginningOfLine<R = void, P0 = unknown>(_deleteToBeginningOfLine: P0): R;
    deleteWordBackward<R = void, P0 = unknown>(_deleteWordBackward: P0): R;
    deleteWordForward<R = void, P0 = unknown>(_deleteWordForward: P0): R;
    deleteBackwardByDecomposingPreviousCharacter<R = void, P0 = unknown>(_deleteBackwardByDecomposingPreviousCharacter: P0): R;
    deleteBackward<R = void, P0 = unknown>(_deleteBackward: P0): R;
    deleteForward<R = void, P0 = unknown>(_deleteForward: P0): R;
    deleteCurrentColorAndSelectNext<R = void>(): R;
    deleteCurrentColorAndSelectPrevious<R = void>(): R;
    colorSelectionHandler<R = CDUnknownBlockType>(): R;
    setColorSelectionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    presentedColors<R = NSArray>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSColorPanelFavoritesList {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSUserInterfaceValidationsProtocol, NSCollectionViewDelegateProtocol, NSCollectionViewDataSourceProtocol {
      alloc<R = NSColorPanelFavoritesList>(): R;
      new: <R = NSColorPanelFavoritesList>() => R;
    }
  }
}

declare const NSColorPanelFavoritesList: cocoa.NSColorPanelFavoritesList.CLASS;
