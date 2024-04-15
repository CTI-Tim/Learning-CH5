export declare class Ch5VideoSnapshot {
    url: string;
    userId: string;
    password: string;
    refreshRate: number;
    private snapshotTimer;
    private videoImage;
    sendEventSnapshotStatus: string;
    sendEventSnapshotLastUpdateTime: string;
    constructor();
    startLoadingSnapshot(): void;
    stopLoadingSnapshot(): void;
    private splitUrl;
    private canProcessUri;
    private processUri;
    private setSnapshot;
    getImage(): HTMLImageElement;
}
