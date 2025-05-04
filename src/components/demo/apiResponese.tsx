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
    abilities: [
      {
        ability: {
          name: "limber",
          url: "https://mh-api.com/v1/v2/ability/7/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "imposter",
          url: "https://mh-api.com/v1/v2/ability/150/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 101,
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg",
    },
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
