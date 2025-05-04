/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ApiResponseProps {
  data?: any;
  isLoading?: boolean;
  error?: string;
}

export default function ApiResponse({
  data,
  isLoading,
  error,
}: ApiResponseProps) {
  // デフォルトのレスポンスデータ（データが提供されていない場合に表示）
  const defaultData = {
    total: 100,
    monsters: [
      {
        monster_id: "1",
        name: "リオレイア",
        another_name: "雌火竜",
        category: "飛竜種",
        title: [
          "MH",
          "MHG",
          "MHP",
          "MH2",
          "P2nd",
          "P2G",
          "P3rd",
          "MH3G",
          "MH3",
          "MH4",
          "MH4G",
          "MHX",
          "MHXX",
          "MHW",
          "MHWI",
          "MHR",
          "MHRS",
        ],
        ranking: [
          {
            ranking: "78",
            vote_year: "2024",
          },
        ],
        image_url:
          "https://raw.githubusercontent.com/o-ga09/MH-API/main/data/monster/1.png",
        bgm: [
          {
            name: "太古の律動/リオレイア",
            url: "https://www.youtube.com/watch?v=jLgjOfT_elA",
          },
        ],
      },
    ],
  };

  const displayData = data || defaultData;

  // JSONデータを整形して表示
  const formatJson = (json: any) => {
    return JSON.stringify(json, null, 2);
  };

  return (
    <div className="bg-gray-900 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
      {isLoading ? (
        <div className="flex justify-center">
          <p>ロード中...</p>
        </div>
      ) : error ? (
        <div className="text-red-400">
          <p>エラー: {error}</p>
        </div>
      ) : (
        <pre>{formatJson(displayData)}</pre>
      )}
    </div>
  );
}
