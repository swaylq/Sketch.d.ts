/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStandardKeyBindingRespondingProtocol<T = any> extends cocoa.NSObjectProtocol {
    quickLookPreviewItems<R = void, P0 = unknown>(_quickLookPreviewItems: P0): R;
    makeTextWritingDirectionRightToLeft<R = void, P0 = unknown>(_makeTextWritingDirectionRightToLeft: P0): R;
    makeTextWritingDirectionLeftToRight<R = void, P0 = unknown>(_makeTextWritingDirectionLeftToRight: P0): R;
    makeTextWritingDirectionNatural<R = void, P0 = unknown>(_makeTextWritingDirectionNatural: P0): R;
    makeBaseWritingDirectionRightToLeft<R = void, P0 = unknown>(_makeBaseWritingDirectionRightToLeft: P0): R;
    makeBaseWritingDirectionLeftToRight<R = void, P0 = unknown>(_makeBaseWritingDirectionLeftToRight: P0): R;
    makeBaseWritingDirectionNatural<R = void, P0 = unknown>(_makeBaseWritingDirectionNatural: P0): R;
    cancelOperation<R = void, P0 = unknown>(_cancelOperation: P0): R;
    swapWithMark<R = void, P0 = unknown>(_swapWithMark: P0): R;
    selectToMark<R = void, P0 = unknown>(_selectToMark: P0): R;
    deleteToMark<R = void, P0 = unknown>(_deleteToMark: P0): R;
    setMark<R = void, P0 = unknown>(_setMark: P0): R;
    complete<R = void, P0 = unknown>(_complete: P0): R;
    yank<R = void, P0 = unknown>(_yank: P0): R;
    deleteToEndOfParagraph<R = void, P0 = unknown>(_deleteToEndOfParagraph: P0): R;
    deleteToBeginningOfParagraph<R = void, P0 = unknown>(_deleteToBeginningOfParagraph: P0): R;
    deleteToEndOfLine<R = void, P0 = unknown>(_deleteToEndOfLine: P0): R;
    deleteToBeginningOfLine<R = void, P0 = unknown>(_deleteToBeginningOfLine: P0): R;
    deleteWordBackward<R = void, P0 = unknown>(_deleteWordBackward: P0): R;
    deleteWordForward<R = void, P0 = unknown>(_deleteWordForward: P0): R;
    deleteBackwardByDecomposingPreviousCharacter<R = void, P0 = unknown>(_deleteBackwardByDecomposingPreviousCharacter: P0): R;
    deleteBackward<R = void, P0 = unknown>(_deleteBackward: P0): R;
    deleteForward<R = void, P0 = unknown>(_deleteForward: P0): R;
    capitalizeWord<R = void, P0 = unknown>(_capitalizeWord: P0): R;
    lowercaseWord<R = void, P0 = unknown>(_lowercaseWord: P0): R;
    uppercaseWord<R = void, P0 = unknown>(_uppercaseWord: P0): R;
    changeCaseOfLetter<R = void, P0 = unknown>(_changeCaseOfLetter: P0): R;
    insertDoubleQuoteIgnoringSubstitution<R = void, P0 = unknown>(_insertDoubleQuoteIgnoringSubstitution: P0): R;
    insertSingleQuoteIgnoringSubstitution<R = void, P0 = unknown>(_insertSingleQuoteIgnoringSubstitution: P0): R;
    insertContainerBreak<R = void, P0 = unknown>(_insertContainerBreak: P0): R;
    insertLineBreak<R = void, P0 = unknown>(_insertLineBreak: P0): R;
    insertTabIgnoringFieldEditor<R = void, P0 = unknown>(_insertTabIgnoringFieldEditor: P0): R;
    insertNewlineIgnoringFieldEditor<R = void, P0 = unknown>(_insertNewlineIgnoringFieldEditor: P0): R;
    insertParagraphSeparator<R = void, P0 = unknown>(_insertParagraphSeparator: P0): R;
    insertNewline<R = void, P0 = unknown>(_insertNewline: P0): R;
    insertBacktab<R = void, P0 = unknown>(_insertBacktab: P0): R;
    insertTab<R = void, P0 = unknown>(_insertTab: P0): R;
    indent<R = void, P0 = unknown>(_indent: P0): R;
    selectWord<R = void, P0 = unknown>(_selectWord: P0): R;
    selectLine<R = void, P0 = unknown>(_selectLine: P0): R;
    selectParagraph<R = void, P0 = unknown>(_selectParagraph: P0): R;
    selectAll<R = void, P0 = unknown>(_selectAll: P0): R;
    transposeWords<R = void, P0 = unknown>(_transposeWords: P0): R;
    transpose<R = void, P0 = unknown>(_transpose: P0): R;
    scrollToEndOfDocument<R = void, P0 = unknown>(_scrollToEndOfDocument: P0): R;
    scrollToBeginningOfDocument<R = void, P0 = unknown>(_scrollToBeginningOfDocument: P0): R;
    scrollLineDown<R = void, P0 = unknown>(_scrollLineDown: P0): R;
    scrollLineUp<R = void, P0 = unknown>(_scrollLineUp: P0): R;
    scrollPageDown<R = void, P0 = unknown>(_scrollPageDown: P0): R;
    scrollPageUp<R = void, P0 = unknown>(_scrollPageUp: P0): R;
    moveToRightEndOfLineAndModifySelection<R = void, P0 = unknown>(_moveToRightEndOfLineAndModifySelection: P0): R;
    moveToLeftEndOfLineAndModifySelection<R = void, P0 = unknown>(_moveToLeftEndOfLineAndModifySelection: P0): R;
    moveToRightEndOfLine<R = void, P0 = unknown>(_moveToRightEndOfLine: P0): R;
    moveToLeftEndOfLine<R = void, P0 = unknown>(_moveToLeftEndOfLine: P0): R;
    moveWordLeftAndModifySelection<R = void, P0 = unknown>(_moveWordLeftAndModifySelection: P0): R;
    moveWordRightAndModifySelection<R = void, P0 = unknown>(_moveWordRightAndModifySelection: P0): R;
    moveLeftAndModifySelection<R = void, P0 = unknown>(_moveLeftAndModifySelection: P0): R;
    moveRightAndModifySelection<R = void, P0 = unknown>(_moveRightAndModifySelection: P0): R;
    moveWordLeft<R = void, P0 = unknown>(_moveWordLeft: P0): R;
    moveWordRight<R = void, P0 = unknown>(_moveWordRight: P0): R;
    moveParagraphBackwardAndModifySelection<R = void, P0 = unknown>(_moveParagraphBackwardAndModifySelection: P0): R;
    moveParagraphForwardAndModifySelection<R = void, P0 = unknown>(_moveParagraphForwardAndModifySelection: P0): R;
    pageUpAndModifySelection<R = void, P0 = unknown>(_pageUpAndModifySelection: P0): R;
    pageDownAndModifySelection<R = void, P0 = unknown>(_pageDownAndModifySelection: P0): R;
    moveToBeginningOfDocumentAndModifySelection<R = void, P0 = unknown>(_moveToBeginningOfDocumentAndModifySelection: P0): R;
    moveToEndOfDocumentAndModifySelection<R = void, P0 = unknown>(_moveToEndOfDocumentAndModifySelection: P0): R;
    moveToEndOfParagraphAndModifySelection<R = void, P0 = unknown>(_moveToEndOfParagraphAndModifySelection: P0): R;
    moveToBeginningOfParagraphAndModifySelection<R = void, P0 = unknown>(_moveToBeginningOfParagraphAndModifySelection: P0): R;
    moveToEndOfLineAndModifySelection<R = void, P0 = unknown>(_moveToEndOfLineAndModifySelection: P0): R;
    moveToBeginningOfLineAndModifySelection<R = void, P0 = unknown>(_moveToBeginningOfLineAndModifySelection: P0): R;
    moveDownAndModifySelection<R = void, P0 = unknown>(_moveDownAndModifySelection: P0): R;
    moveUpAndModifySelection<R = void, P0 = unknown>(_moveUpAndModifySelection: P0): R;
    moveWordBackwardAndModifySelection<R = void, P0 = unknown>(_moveWordBackwardAndModifySelection: P0): R;
    moveWordForwardAndModifySelection<R = void, P0 = unknown>(_moveWordForwardAndModifySelection: P0): R;
    moveForwardAndModifySelection<R = void, P0 = unknown>(_moveForwardAndModifySelection: P0): R;
    moveBackwardAndModifySelection<R = void, P0 = unknown>(_moveBackwardAndModifySelection: P0): R;
    centerSelectionInVisibleArea<R = void, P0 = unknown>(_centerSelectionInVisibleArea: P0): R;
    pageUp<R = void, P0 = unknown>(_pageUp: P0): R;
    pageDown<R = void, P0 = unknown>(_pageDown: P0): R;
    moveToBeginningOfDocument<R = void, P0 = unknown>(_moveToBeginningOfDocument: P0): R;
    moveToEndOfDocument<R = void, P0 = unknown>(_moveToEndOfDocument: P0): R;
    moveToEndOfParagraph<R = void, P0 = unknown>(_moveToEndOfParagraph: P0): R;
    moveToBeginningOfParagraph<R = void, P0 = unknown>(_moveToBeginningOfParagraph: P0): R;
    moveToEndOfLine<R = void, P0 = unknown>(_moveToEndOfLine: P0): R;
    moveToBeginningOfLine<R = void, P0 = unknown>(_moveToBeginningOfLine: P0): R;
    moveWordBackward<R = void, P0 = unknown>(_moveWordBackward: P0): R;
    moveWordForward<R = void, P0 = unknown>(_moveWordForward: P0): R;
    moveDown<R = void, P0 = unknown>(_moveDown: P0): R;
    moveUp<R = void, P0 = unknown>(_moveUp: P0): R;
    moveLeft<R = void, P0 = unknown>(_moveLeft: P0): R;
    moveBackward<R = void, P0 = unknown>(_moveBackward: P0): R;
    moveRight<R = void, P0 = unknown>(_moveRight: P0): R;
    moveForward<R = void, P0 = unknown>(_moveForward: P0): R;
    doCommandBySelector<R = void, P0 = string>(_doCommandBySelector: P0): R;
    insertText<R = void, P0 = unknown>(_insertText: P0): R;
  }
  namespace classes {
    export interface NSStandardKeyBindingRespondingProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSStandardKeyBindingRespondingProtocol: cocoa.classes.NSStandardKeyBindingRespondingProtocol;
