

export interface Personalized {
    id: number
    type: number
    name: string
    copywriter: string
    picUrl: string
    canDislike: boolean
    trackNumberUpdateTime: number,
    playCount: number,
    trackCount: number,
    highQuality: boolean,
    alg: string
}

export enum IndexActionType {
    INDEX_FETCH_REQUESTED = 'INDEX_FETCH_REQUESTED',
    INDEX_FETCH_SUCCEEDED = 'INDEX_FETCH_SUCCEEDED',
    INDEX_FETCH_FAILED = 'INDEX_FETCH_FAILED'
}

export interface IndexState {
    readonly loading: boolean
    readonly data: Personalized[]
    readonly errors?: string
}
