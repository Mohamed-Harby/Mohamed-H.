import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import blogData from '../../data/blogPosts';
import './BlogPostPage.scss';

// Icon for the button (using a simple checkmark)
const CopyIcon = () => <span role="img" aria-label="copy">📋</span>;
const CopiedIcon = () => <span role="img" aria-label="copied">✔️</span>;

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogData.find(post => post.slug === slug);
  const [content, setContent] = useState('');

  // State to manage the button text and icon
  const [copyStatus, setCopyStatus] = useState('Copy'); // 'Copy' or 'Copied'

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const markdownModule = await import(`../../data/posts/${slug}.md`);
        const response = await fetch(markdownModule.default);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error loading markdown:', error);
        setContent('Post content not found');
      }
    };

    if (post) {
      fetchContent();
    }
  }, [slug, post]);

  if (!post) return <div>Post not found</div>;

  // Function to handle copy to clipboard
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      // Update button text and icon to "Copied"
      setCopyStatus('Copied');
      // Reset the button state back to "Copy" after 2 seconds
      setTimeout(() => setCopyStatus('Copy'), 2000);
    }).catch((err) => {
      console.error('Failed to copy code: ', err);
    });
  };

  // Custom styles for transparent background
  const customStyle = {
    ...duotoneDark, // Inherit the original styles
    'pre[class*="language-"]': {
      ...duotoneDark['pre[class*="language-"]'], // Retain all original styles
      backgroundColor: 'transparent', // Transparent background
      padding: '0rem', // Padding for better readability
      margin: '0rem'
    },
  };

  return (
    <div className="blog-post-page">
      <article>
        <header>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <time>{post.date}</time>
          </div>
        </header>
        <div className="content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                const codeContent = String(children).replace(/\n$/, '');
                
                return !inline && match ? (
                  <div className="code-block-container">
                    <SyntaxHighlighter
                      style={customStyle}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                      showLineNumbers
                      wrapLines
                    >
                      {codeContent}
                    </SyntaxHighlighter>
                    <button 
                      className="copy-btn" 
                      onClick={() => handleCopy(codeContent)}
                    >
                      {copyStatus === 'Copy' ? <CopyIcon /> : <CopiedIcon />}
                      {copyStatus}
                    </button>
                  </div>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
