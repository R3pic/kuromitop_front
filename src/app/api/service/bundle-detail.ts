import { UUID } from "crypto";
import { Track } from "../types";
import { APIfetch } from "../fetch";

type BundleData = {
    title: string,
    tracks: Track[],
}

export async function fetchBundledetail(bundleId: UUID): Promise<BundleData> {
    const response = await APIfetch<BundleData>(`/bundles/${bundleId}/tracks`, { method: 'GET', auth: true });
    return response
}