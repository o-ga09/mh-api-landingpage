"use client";

import { useState, useRef, useEffect } from "react";

// パラメータとプロパティの型定義を追加
interface Parameter {
  name: string;
  type: string;
  in: string;
  description?: string;
  required?: boolean;
}

interface SchemaProperty {
  name: string;
  type: string;
  description?: string;
}

// サイドメニューのタイプ定義
interface MenuItem {
  id: string;
  label: string;
}

export default function Document() {
  // スムーズスクロール処理
  const scrollToSection = (id: string) => {
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // スクロール後にアクティブセクションを更新
      setActiveSection(id);
    }
  };

  const apiInfo = {
    title: "MH-API",
    version: "v0.1.0",
    description: "モンスターハンターAPI",
    license: {
      name: "MIT License",
      url: "https://opensource.org/license/MIT",
    },
  };

  const endpoints = [
    {
      path: "/monsters",
      method: "GET",
      summary: "モンスター検索（複数件）",
      description:
        "モンスターを検索して、条件に合致するモンスターを複数件取得する",
      parameters: [
        {
          name: "MonsterIds",
          type: "string",
          in: "query",
          description: "モンスターID",
        },
        {
          name: "MonsterName",
          type: "string",
          in: "query",
          description: "モンスター名",
        },
        {
          name: "limit",
          type: "integer",
          in: "query",
          description: "取得件数",
        },
        {
          name: "offset",
          type: "integer",
          in: "query",
          description: "取得開始位置",
        },
        { name: "sort", type: "string", in: "query", description: "ソート順" },
      ] as Parameter[],
    },
    {
      path: "/monsters/:monsterid",
      method: "GET",
      summary: "モンスター検索（1件）",
      description:
        "モンスターを検索して、条件に合致するモンスターを1件取得する",
      parameters: [
        {
          name: "MonsterId",
          type: "string",
          in: "path",
          description: "モンスターID",
          required: true,
        },
      ] as Parameter[],
    },
    // {
    //   path: "/items/:itemId",
    //   method: "GET",
    //   summary: "アイテム検索（1件）",
    //   description: "アイテムを検索して、条件に合致するアイテムを1件取得する",
    //   parameters: [
    //     { name: "item_name", type: "string", in: "query" },
    //     { name: "item_name_kana", type: "string", in: "query" },
    //     { name: "limit", type: "integer", in: "query" },
    //     { name: "monster_id", type: "string", in: "query" },
    //     { name: "offset", type: "integer", in: "query" },
    //     { name: "order", type: "integer", in: "query" },
    //     { name: "sort", type: "string", in: "query" },
    //   ] as Parameter[],
    // },
    // {
    //   path: "/weapons",
    //   method: "GET",
    //   summary: "武器検索（複数件）",
    //   description: "武器を検索して、条件に合致する武器を複数件取得する",
    //   parameters: [
    //     { name: "limit", type: "integer", in: "query" },
    //     { name: "monster_id", type: "string", in: "query" },
    //     { name: "name", type: "string", in: "query" },
    //     { name: "name_kana", type: "string", in: "query" },
    //     { name: "offset", type: "integer", in: "query" },
    //     { name: "order", type: "integer", in: "query" },
    //     { name: "sort", type: "string", in: "query" },
    //   ] as Parameter[],
    // },
    // {
    //   path: "/weapons/:bgmid",
    //   method: "GET",
    //   summary: "武器検索（1件）",
    //   description: "武器を検索して、条件に合致する武器を1件取得する",
    //   parameters: [
    //     { name: "limit", type: "integer", in: "query" },
    //     { name: "monster_id", type: "string", in: "query" },
    //     { name: "name", type: "string", in: "query" },
    //     { name: "name_kana", type: "string", in: "query" },
    //     { name: "offset", type: "integer", in: "query" },
    //     { name: "order", type: "integer", in: "query" },
    //     { name: "sort", type: "string", in: "query" },
    //   ] as Parameter[],
    // },
  ];

  const schemas = {
    monster: {
      properties: [
        { name: "monster_id", type: "string", description: "モンスターID" },
        { name: "name", type: "string", description: "モンスター名" },
        { name: "another_name", type: "string", description: "モンスター別名" },
        {
          name: "category",
          type: "string",
          description: "モンスターのカテゴリ",
        },
        {
          name: "ranking",
          type: "array<Object>",
          description: "モンスター総選挙の順位",
        },
        {
          name: "title",
          type: "array<string>",
          description: "登場作品",
        },
        { name: "image_url", type: "string", description: "モンスター画像URL" },
        {
          name: "bgm",
          type: "array<Object>",
          description: "モンスターのBGM",
        },
        // {
        //   name: "first_weak_attack",
        //   type: "string",
        //   description: "最有効弱点",
        // },
        // {
        //   name: "second_weak_attack",
        //   type: "string",
        //   description: "2番目に有効な弱点",
        // },
        // {
        //   name: "first_weak_element",
        //   type: "string",
        //   description: "最有効属性",
        // },
        // {
        //   name: "second_weak_element",
        //   type: "string",
        //   description: "2番目に有効な属性",
        // },
      ] as SchemaProperty[],
    },
    // item: {
    //   properties: [
    //     { name: "item_id", type: "string" },
    //     { name: "item_name", type: "string" },
    //   ] as SchemaProperty[],
    // },
    // weapon: {
    //   properties: [
    //     { name: "name", type: "string" },
    //     { name: "monster_id", type: "string" },
    //     { name: "attack", type: "string" },
    //     { name: "critical", type: "string" },
    //     { name: "elemant_attaxk", type: "string" },
    //     { name: "description", type: "string" },
    //     { name: "image_url", type: "string" },
    //     { name: "rare", type: "string" },
    //     { name: "shapness", type: "string" },
    //   ] as SchemaProperty[],
    // },
  };

  const [activeSection, setActiveSection] = useState<string>("api-info");
  // セクションへの参照を保持
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // メニュー項目
  const menuItems: MenuItem[] = [
    { id: "api-info", label: "API情報" },
    { id: "endpoints", label: "エンドポイント" },
    { id: "schemas", label: "レスポンススキーマ" },
    { id: "errors", label: "エラーレスポンス" },
  ];

  // スクロール監視のための効果
  useEffect(() => {
    const options = {
      root: null, // ビューポートを使用
      rootMargin: "-20% 0px -60% 0px", // 上部に少し余裕を持たせ、下部は判定範囲を狭める
      threshold: 0.1, // 10%表示されたら発火
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // "section-" プレフィックスを削除してIDを取得
          const sectionId = entry.target.id.replace("section-", "");
          setActiveSection(sectionId);
        }
      });
    };

    // オブザーバーの作成
    const observer = new IntersectionObserver(observerCallback, options);

    // 各セクションの監視を開始
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // コンポーネントのクリーンアップ時に監視を停止
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="container mx-auto py-10 px-4 md:px-6 flex flex-col md:flex-row gap-8">
      {/* サイドメニュー */}
      <aside className="md:w-64 md:sticky md:top-24 h-fit">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">目次</h2>
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      activeSection === item.id
                        ? "bg-green-100 text-green-800 font-medium"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* メインコンテンツ */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6">
          {apiInfo.title} {apiInfo.version}
        </h1>
        <p className="mb-6 text-gray-700">{apiInfo.description}</p>

        <div
          id="section-api-info"
          className="mb-10"
          ref={(el) => {
            sectionRefs.current["api-info"] = el;
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">API情報</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              <span className="font-medium">バージョン:</span> {apiInfo.version}
            </p>
            <p>
              <span className="font-medium">ライセンス:</span>{" "}
              {apiInfo.license.name}
            </p>
            <p>
              <span className="font-medium">ライセンスURL:</span>{" "}
              <a
                href={apiInfo.license.url}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {apiInfo.license.url}
              </a>
            </p>
            <p className="mt-2 text-sm text-gray-600">
              ベースURL: https://api.mh-api.com/v1
            </p>
          </div>
        </div>

        <div
          id="section-endpoints"
          className="mb-10"
          ref={(el) => {
            sectionRefs.current["endpoints"] = el;
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">エンドポイント</h2>
          {endpoints.map((endpoint, index) => (
            <div
              key={index}
              className="mb-6 border border-gray-200 rounded-md p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-800 font-mono px-2 py-1 rounded text-sm">
                  {endpoint.method}
                </span>
                <code className="font-mono text-md">{endpoint.path}</code>
              </div>
              <h3 className="font-medium mb-1">{endpoint.summary}</h3>
              <p className="text-gray-700 mb-4">{endpoint.description}</p>

              {endpoint.parameters && endpoint.parameters.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">パラメータ:</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            名前
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            場所
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            タイプ
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            必須
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            説明
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {endpoint.parameters.map((param, pIndex) => (
                          <tr key={pIndex}>
                            <td className="border border-gray-300 px-4 py-2">
                              {param.name}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {param.in}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {param.type}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {param.required ? "はい" : "いいえ"}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {param.description || "-"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          id="section-schemas"
          className="mb-10"
          ref={(el) => {
            sectionRefs.current["schemas"] = el;
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">レスポンススキーマ</h2>

          {Object.entries(schemas).map(([key, schema]) => (
            <div
              key={key}
              className="mb-6 border border-gray-200 rounded-md p-4"
            >
              <h3 className="font-medium mb-2">{key}</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        プロパティ
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        タイプ
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        説明
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {schema.properties.map((prop, pIndex) => (
                      <tr key={pIndex}>
                        <td className="border border-gray-300 px-4 py-2">
                          {prop.name}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {prop.type}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {prop.description || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div
          id="section-errors"
          className="mb-6"
          ref={(el) => {
            sectionRefs.current["errors"] = el;
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">エラーレスポンス</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    ステータスコード
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    説明
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">400</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Bad Request - リクエストが不正です
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">404</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Not Found - リソースが見つかりません
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">500</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Internal Server Error - サーバー内部エラー
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
