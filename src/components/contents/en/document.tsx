"use client";

import { useState, useRef, useEffect } from "react";

// Parameter and property type definitions
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

// Side menu type definition
interface MenuItem {
  id: string;
  label: string;
}

export default function Document() {
  // Smooth scrolling handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update active section after scrolling
      setActiveSection(id);
    }
  };

  const apiInfo = {
    title: "MH-API",
    version: "v0.1.0",
    description: "Monster Hunter API",
    license: {
      name: "MIT License",
      url: "https://opensource.org/license/MIT",
    },
  };

  const endpoints = [
    {
      path: "/monsters",
      method: "GET",
      summary: "Search Monsters (Multiple)",
      description:
        "Search for monsters and retrieve multiple monsters matching the criteria",
      parameters: [
        {
          name: "MonsterIds",
          type: "string",
          in: "query",
          description: "Monster ID",
        },
        {
          name: "MonsterName",
          type: "string",
          in: "query",
          description: "Monster name",
        },
        {
          name: "limit",
          type: "integer",
          in: "query",
          description: "Number of records to retrieve",
        },
        {
          name: "offset",
          type: "integer",
          in: "query",
          description: "Starting position",
        },
        {
          name: "sort",
          type: "string",
          in: "query",
          description: "Sort order",
        },
      ] as Parameter[],
    },
    {
      path: "/monsters/:monsterid",
      method: "GET",
      summary: "Search Monster (Single)",
      description:
        "Search for a monster and retrieve a single monster matching the criteria",
      parameters: [
        {
          name: "monsterid",
          type: "string",
          in: "path",
          description: "Monster ID",
          required: true,
        },
      ] as Parameter[],
    },
    // {
    //   path: "/items/:itemId",
    //   method: "GET",
    //   summary: "Search Item (Single)",
    //   description: "Search for an item and retrieve a single item matching the criteria",
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
    //   summary: "Search Weapons (Multiple)",
    //   description: "Search for weapons and retrieve multiple weapons matching the criteria",
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
    //   summary: "Search Weapon (Single)",
    //   description: "Search for a weapon and retrieve a single weapon matching the criteria",
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
        { name: "monster_id", type: "string", description: "Monster ID" },
        { name: "name", type: "string", description: "Monster name" },
        {
          name: "another_name",
          type: "string",
          description: "Monster alternative name",
        },
        {
          name: "category",
          type: "string",
          description: "Monster category",
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
        { name: "image_url", type: "string", description: "Monster image URL" },
        {
          name: "bgm",
          type: "array<Object>",
          description: "モンスターのBGM",
        },
        // {
        //   name: "first_weak_attack",
        //   type: "string",
        //   description: "Most effective weakness",
        // },
        // {
        //   name: "second_weak_attack",
        //   type: "string",
        //   description: "Second most effective weakness",
        // },
        // {
        //   name: "first_weak_element",
        //   type: "string",
        //   description: "Most effective element",
        // },
        // {
        //   name: "second_weak_element",
        //   type: "string",
        //   description: "Second most effective element",
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
  // References to sections
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Menu items
  const menuItems: MenuItem[] = [
    { id: "api-info", label: "API Information" },
    { id: "endpoints", label: "Endpoints" },
    { id: "schemas", label: "Response Schemas" },
    { id: "errors", label: "Error Responses" },
  ];

  // Scroll monitoring effect
  useEffect(() => {
    const options = {
      root: null, // Use viewport
      rootMargin: "-20% 0px -60% 0px", // Add some margin at top and narrow the detection range at bottom
      threshold: 0.1, // Fire when 10% is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove "section-" prefix to get ID
          const sectionId = entry.target.id.replace("section-", "");
          setActiveSection(sectionId);
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(observerCallback, options);

    // Start monitoring each section
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Clean up when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="container mx-auto py-10 px-4 md:px-6 flex flex-col md:flex-row gap-8">
      {/* Side menu */}
      <aside className="md:w-64 md:sticky md:top-24 h-fit">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
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

      {/* Main content */}
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
          <h2 className="text-2xl font-semibold mb-4">API Information</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              <span className="font-medium">Version:</span> {apiInfo.version}
            </p>
            <p>
              <span className="font-medium">License:</span>{" "}
              {apiInfo.license.name}
            </p>
            <p>
              <span className="font-medium">License URL:</span>{" "}
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
              Base URL: https://api.mh-api.com/v1
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
          <h2 className="text-2xl font-semibold mb-4">Endpoints</h2>
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
                  <h4 className="font-medium mb-2">Parameters:</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            Name
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            Location
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            Type
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            Required
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            Description
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
                              {param.required ? "Yes" : "No"}
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
          <h2 className="text-2xl font-semibold mb-4">Response Schemas</h2>

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
                        Property
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Type
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Description
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
          <h2 className="text-2xl font-semibold mb-4">Error Responses</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Status Code
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">400</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Bad Request - The request is invalid
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">404</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Not Found - The resource was not found
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">500</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Internal Server Error - Server internal error
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
