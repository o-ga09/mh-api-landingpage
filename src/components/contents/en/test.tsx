"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { CopyIcon, CheckIcon, Plus, X } from "lucide-react";
import Link from "next/link";
import ApiResponse from "../../demo/apiResponese";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

// Query parameter type definition
interface QueryParam {
  name: string;
  value: string;
}

// Available parameter information
interface ParamInfo {
  name: string;
  type: string;
  description: string;
}

// Available parameters for each endpoint
const availableParams: Record<string, ParamInfo[]> = {
  monsters: [
    { name: "MonsterIds", type: "string", description: "Monster ID" },
    { name: "MonsterName", type: "string", description: "Monster Name" },
    { name: "limit", type: "integer", description: "Number of records" },
    { name: "offset", type: "integer", description: "Starting position" },
    { name: "sort", type: "string", description: "Sort order" },
  ],
  "monsters/:monsterid": [
    {
      name: "monsterid",
      type: "string",
      description: "Monster ID (path parameter)",
    },
  ],
};

export const Test = () => {
  const baseUrl = "https://api.mh-api.com/v1/"; // Monster Hunter API URL
  const [endpoint, setEndpoint] = useState("monsters");
  const [apiData, setApiData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Query parameter related state
  const [queryParams, setQueryParams] = useState<QueryParam[]>([]);
  const [currentParam, setCurrentParam] = useState<string>("");
  const [currentValue, setCurrentValue] = useState<string>("");
  const [showParamPanel, setShowParamPanel] = useState(false);

  // Timer to reset copy state
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  // Reset query parameters when endpoint changes
  useEffect(() => {
    setQueryParams([]);
  }, [endpoint]);

  // Function to create URL
  const getFullUrl = () => {
    let url = `${baseUrl}${endpoint}`;

    if (queryParams.length > 0) {
      url += "?";
      const queryString = queryParams
        .map(
          (param) =>
            `${encodeURIComponent(param.name)}=${encodeURIComponent(
              param.value
            )}`
        )
        .join("&");
      url += queryString;
    }

    return url;
  };

  // Function to send API request
  const fetchApiData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(getFullUrl());
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setApiData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to copy URL to clipboard
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(getFullUrl())
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        console.error("Couldn't copy:", err);
      });
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchApiData();
  };

  // Function to add query parameter
  const addQueryParam = () => {
    if (currentParam && currentValue) {
      setQueryParams([
        ...queryParams,
        { name: currentParam, value: currentValue },
      ]);
      setCurrentParam("");
      setCurrentValue("");
    }
  };

  // Function to remove query parameter
  const removeQueryParam = (index: number) => {
    const newParams = [...queryParams];
    newParams.splice(index, 1);
    setQueryParams(newParams);
  };

  // Get parameter list corresponding to endpoint
  const getCurrentEndpointParams = () => {
    // For endpoints like monsters/:monsterid, extract just the monsters part
    const baseEndpoint = endpoint.split("/")[0];
    return availableParams[baseEndpoint] || [];
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">Try it now!</h2>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex items-center mb-4">
            <div className="flex-1 flex items-center">
              <Input
                type="text"
                value={baseUrl}
                className="rounded-r-none border-r-0 w-1/2"
                readOnly
              />
              <Input
                type="text"
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
                className="rounded-l-none w-1/2"
              />
            </div>
            <Button
              type="button"
              variant="outline"
              className="ml-2 px-3"
              onClick={copyToClipboard}
            >
              {copied ? (
                <CheckIcon className="h-4 w-4 text-green-500" />
              ) : (
                <CopyIcon className="h-4 w-4" />
              )}
            </Button>
            <Button
              type="submit"
              className="ml-2 bg-blue-500 hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"}
            </Button>
          </div>

          {/* Query parameter display */}
          {queryParams.length > 0 && (
            <div className="mb-4 p-3 bg-gray-50 rounded-md">
              <h3 className="text-sm font-medium mb-2">Query Parameters</h3>
              <div className="flex flex-wrap gap-2">
                {queryParams.map((param, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-100 rounded px-2 py-1 text-sm"
                  >
                    <span>
                      {param.name}={param.value}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeQueryParam(index)}
                      className="ml-1 text-gray-500 hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Query parameter add panel */}
          <div className="mb-4">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setShowParamPanel(!showParamPanel)}
              className="text-sm"
            >
              {showParamPanel
                ? "Close Parameter Panel"
                : "Add Query Parameters"}
            </Button>

            {showParamPanel && (
              <div className="mt-2 p-3 border rounded-md">
                <div className="mb-3">
                  <p className="text-sm text-gray-600 mb-2">
                    Available parameters:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {getCurrentEndpointParams().map((param, index) => (
                      <div
                        key={index}
                        className="text-xs bg-blue-100 text-blue-800 rounded px-2 py-1 cursor-pointer hover:bg-blue-200"
                        onClick={() => setCurrentParam(param.name)}
                        title={param.description}
                      >
                        {param.name} ({param.type})
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Input
                    type="text"
                    placeholder="Parameter name"
                    value={currentParam}
                    onChange={(e) => setCurrentParam(e.target.value)}
                    className="flex-1"
                  />
                  <Input
                    type="text"
                    placeholder="Value"
                    value={currentValue}
                    onChange={(e) => setCurrentValue(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    onClick={addQueryParam}
                    disabled={!currentParam || !currentValue}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </form>

        <div className="mb-6">
          <p className="font-medium mb-2">
            Complete URL:
            <Link
              href={getFullUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline ml-1"
            >
              {getFullUrl()}
            </Link>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">
            {apiData ? `Response for ${endpoint}` : "monsters resources"}
          </h3>
          <ApiResponse
            data={apiData}
            isLoading={isLoading}
            error={error || undefined}
          />
        </div>
      </div>
    </section>
  );
};
