/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGImageSnapshotRep<T0 = void, T1 = void, T2 = void> extends NSImageRep {
    hasAlpha<R = boolean>(): R;
    pixelsHigh<R = number>(): R;
    pixelsWide<R = number>(): R;
    bitsPerSample<R = number>(): R;
    classForKeyedArchiver<R = unknown>(): R;
    classForArchiver<R = unknown>(): R;
    _snapshotRep_CGImageForProposedRect_context_hints<R = CGImage, P0 = CGRect, P1 = unknown, P2 = unknown>(__snapshotRep_CGImageForProposedRect: P0, _context: P1, _hints: P2): R;
    isApplicableForRect_context_hints<R = boolean, P0 = CGRect, P1 = unknown, P2 = unknown>(_isApplicableForRect: P0, _context: P1, _hints: P2): R;
    fullDescription<R = unknown>(): R;
    initWithCGImage_drawingRect_applicableForRect_context_hints<R = unknown, P0 = CGImage, P1 = CGRect, P2 = CGRect, P3 = unknown, P4 = unknown>(_initWithCGImage: P0, _drawingRect: P1, _applicableForRect: P2, _context: P3, _hints: P4): R;
    initWithCGImage_snapshotContextSignature<R = unknown, P0 = CGImage, P1 = unknown>(_initWithCGImage: P0, _snapshotContextSignature: P1): R;
    _snapshotRep_commonSetupWithWithCGImage_snapshotContextSignature<R = boolean, P0 = CGImage, P1 = unknown>(__snapshotRep_commonSetupWithWithCGImage: P0, _snapshotContextSignature: P1): R;
  }
  namespace NSCGImageSnapshotRep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageRep {
      alloc<R = NSCGImageSnapshotRep>(): R;
      new: <R = NSCGImageSnapshotRep>() => R;
      unlockFocusCreatingCGImageSnapshotRep<R = unknown>(): R;
      unlockFocusCreatingCGImageAndDrawingRect<R = CGImage, P0 = CGRect>(_unlockFocusCreatingCGImageAndDrawingRect: P0): R;
      _unlockFocusAndPerformBlockUsingCGImageAndCapturingContext<R = CGImage, P0 = CDUnknownBlockType>(__unlockFocusAndPerformBlockUsingCGImageAndCapturingContext: P0): R;
      lockFocusForCreatingSnapshotWithRect_context_hints_flipped<R = void, P0 = CGRect, P1 = unknown, P2 = unknown, P3 = boolean>(_lockFocusForCreatingSnapshotWithRect: P0, _context: P1, _hints: P2, _flipped: P3): R;
      lockFocusForCreatingCGImageWithRect_context_hints_flipped<R = void, P0 = CGRect, P1 = unknown, P2 = unknown, P3 = boolean>(_lockFocusForCreatingCGImageWithRect: P0, _context: P1, _hints: P2, _flipped: P3): R;
      _lockFocusForCreatingSnapshot_withRect_context_hints_flipped<R = void, P0 = boolean, P1 = CGRect, P2 = unknown, P3 = unknown, P4 = boolean>(__lockFocusForCreatingSnapshot: P0, _withRect: P1, _context: P2, _hints: P3, _flipped: P4): R;
      classFallbacksForKeyedArchiver<R = unknown>(): R;
    }
  }
}

declare const NSCGImageSnapshotRep: cocoa.NSCGImageSnapshotRep.CLASS;
