
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Header } from './components/Header';
import { LeftPanel } from './components/LeftPanel';
import { RightPanel } from './components/RightPanel';
import { Instructions } from './components/Instructions';
import { BankPanel } from './components/BankPanel';
import { LicensePanel } from './components/LicensePanel';
import { KeyGeneratorPanel } from './components/KeyGeneratorPanel';
import { UserManagementPanel } from './components/UserManagementPanel';
import { PresentationPanel } from './components/PresentationPanel';
import { FunctionAnalyzerPanel } from './components/FunctionAnalyzerPanel';
import { SimilarTestGeneratorPanel } from './components/SimilarTestGeneratorPanel';
import { MatrixAnalysisPanel } from './components/MatrixAnalysisPanel';
import { Notifications } from './components/Notifications';
import { MATH_CURRICULUM } from './constants';
import type { TopicNode, GeneratedQuestion, QuestionConfig, TestInfo, DifficultyLevelCounts, LicensedUser, Difficulty, PropositionItem, Notification, NotificationType } from './types';
import { difficultyMap } from './types';

const MAX_QUESTIONS_PER_TYPE_PER_LEVEL = 20;
const SECRET_SALT = 'NGUYEN-THANH-DAN-LICENSE-KEY-SALT-2024';
const QUESTIONS_PER_BATCH = 10; // Tăng batch size để giảm số lượng request

const initialDifficultyCounts: DifficultyLevelCounts = {
  recognition: 0,
  comprehension: 0,
  application: 0,
  highApplication: 0,
};

const initialQuestionConfig: QuestionConfig = {
  multipleChoice: { ...initialDifficultyCounts },
  trueFalse: { ...initialDifficultyCounts },
  shortAnswer: { ...initialDifficultyCounts },
  essay: { ...initialDifficultyCounts },
  matching: { ...initialDifficultyCounts },
};

const Introduction: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  const features = [
    {
      title: 'Tạo Đề Tự Động',
      icon: '📝',
      desc: 'Xây dựng đề thi trắc nghiệm theo ma trận kiến thức chuẩn. Tùy biến số lượng câu hỏi theo 4 mức độ nhận thức.',
      view: 'Tạo đề',
      className: 'bg-blue-50 border-blue-200 text-blue-900 hover:bg-blue-100'
    },
    {
      title: 'Phân Tích Ma Trận AI',
      icon: '🤖',
      desc: 'Bóc tách đề thi từ file PDF/Ảnh, tự động nhận diện cấu trúc và tạo ra các mã đề tương tự.',
      view: 'Phân tích ma trận',
      className: 'bg-indigo-50 border-indigo-200 text-indigo-900 hover:bg-indigo-100'
    },
    {
      title: 'Tạo Đề Tương Tự',
      icon: '🔄',
      desc: 'Tạo đề hoán vị hoặc đề tương tự từ file JSON hoặc đề gốc với độ chính xác cao.',
      view: 'Tạo đề tương tự',
      className: 'bg-purple-50 border-purple-200 text-purple-900 hover:bg-purple-100'
    },
    {
      title: 'Khảo Sát Hàm Số',
      icon: '📈',
      desc: 'Vẽ đồ thị và lập bảng biến thiên tự động, hỗ trợ xuất code LaTeX chuyên nghiệp.',
      view: 'Khảo sát hàm số',
      className: 'bg-teal-50 border-teal-200 text-teal-900 hover:bg-teal-100'
    },
    {
        title: 'Ngân Hàng Câu Hỏi',
        icon: '🗄️',
        desc: 'Hệ thống quản lý câu hỏi thông minh: lưu trữ, tìm kiếm, chỉnh sửa và tái sử dụng.',
        view: 'Bank',
        className: 'bg-rose-50 border-rose-200 text-rose-900 hover:bg-rose-100'
    },
    {
        title: 'Trình Chiếu',
        icon: '🖥️',
        desc: 'Chế độ trình chiếu câu hỏi phục vụ giảng dạy trên lớp.',
        view: 'Trình chiếu',
        className: 'bg-amber-50 border-amber-200 text-amber-900 hover:bg-amber-100'
    }
  ];

  return (
    <div className="w-full h-full bg-slate-50 p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200 text-center">
            <h1 className="text-4xl font-extrabold text-red-600 mb-4 tracking-tight">
                Trợ lý Tạo Đề Toán THPT
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Giải pháp công nghệ toàn diện hỗ trợ giáo viên soạn thảo đề thi, quản lý ngân hàng câu hỏi và giảng dạy hiệu quả.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
                <span>Phát triển bởi thầy giáo</span>
                <span className="font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Nguyễn Thanh Dàn</span>
            </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
                <div 
                    key={feature.title}
                    onClick={() => onNavigate(feature.view)}
                    className={`p-6 rounded-xl border shadow-sm transition-all cursor-pointer transform hover:-translate-y-1 hover:shadow-md ${feature.className}`}
                >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-bold mb-2 text-red-600">{feature.title}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">{feature.desc}</p>
                </div>
            ))}
        </div>
        
        <div className="text-center text-slate-400 text-sm italic mt-8">
            "Đổi mới sáng tạo - Nâng tầm giáo dục"
        </div>
      </div>
    </div>
  );
};

// Utility function to clean up AI response formatting
const sanitizeQuestions = (questions: any[]): GeneratedQuestion[] => {
    if (!Array.isArray(questions)) return [];
    return questions.map((q, index) => {
        const sanitizedQ = { ...q, id: q.id || `q-san-${Date.now()}-${index}` };
        if (sanitizedQ.type === 'multipleChoice' && Array.isArray(sanitizedQ.options)) {
            sanitizedQ.options = sanitizedQ.options.map((opt: unknown) => 
                typeof opt === 'string' ? opt.replace(/^[A-D]\.\s*/i, '').trim() : ''
            );
        }
        if (sanitizedQ.type === 'trueFalse' && Array.isArray(sanitizedQ.propositions)) {
            sanitizedQ.propositions = sanitizedQ.propositions
                .filter((prop: any): prop is PropositionItem => typeof prop === 'object' && prop !== null && typeof prop.text === 'string')
                .map((prop: PropositionItem) => ({
                    ...prop,
                    text: prop.text.replace(/^[a-d][\)\.]\s*/i, '').trim()
                }));
        }
        if (sanitizedQ.type === 'matching') {
            if (!Array.isArray(sanitizedQ.matchingPrompts) || sanitizedQ.matchingPrompts.length === 0) {
                sanitizedQ.matchingPrompts = ["", "", "", ""];
            }
            if (!Array.isArray(sanitizedQ.matchingAnswers) || sanitizedQ.matchingAnswers.length === 0) {
                sanitizedQ.matchingAnswers = ["", "", "", ""];
            }
        }
        return sanitizedQ as GeneratedQuestion;
    });
};


export default function App() {
  const [activeView, setActiveView] = useState<string>('Giới thiệu');
  const [curriculum, setCurriculum] = useState<TopicNode[]>(MATH_CURRICULUM);
  const [selectedTopicIds, setSelectedTopicIds] = useState<Set<string>>(new Set());
  const [generatedQuestions, setGeneratedQuestions] = useState<GeneratedQuestion[][]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const [topicQuestionConfig, setTopicQuestionConfig] = useState<Record<string, QuestionConfig>>({});
  const [configErrors, setConfigErrors] = useState<Record<string, Partial<Record<keyof QuestionConfig, Partial<Record<keyof DifficultyLevelCounts, string | undefined>>>>>>({});
  
  const [isReviewing, setIsReviewing] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  
  const [numberOfTests, setNumberOfTests] = useState<number>(1);
  const [currentTestIndex, setCurrentTestIndex] = useState<number>(0);

  const [testInfo, setTestInfo] = useState<TestInfo>({
    school: 'Trường THPT Hướng Hoá',
    teacher: 'Nguyễn Thanh Dàn',
    time: '45 phút',
    title: 'Bài kiểm tra',
    testCode: 1,
    exportType: 'loigiai',
  });

  const [distributionConfig, setDistributionConfig] = useState({
    totalQuestions: 40,
    percentages: {
        recognition: 40,
        comprehension: 30,
        application: 20,
        highApplication: 10,
    },
    typePercentages: {
        multipleChoice: 60,
        trueFalse: 10,
        shortAnswer: 10,
        essay: 10,
        matching: 10,
    },
  });
  
  const [questionBank, setQuestionBank] = useState<GeneratedQuestion[]>([]);
  
  const [isLicensed, setIsLicensed] = useState<boolean>(false);
  const [deviceId, setDeviceId] = useState<string>('');
  const [schoolName, setSchoolName] = useState<string>('');
  const [teacherName, setTeacherName] = useState<string>('');
  const [licensedUsers, setLicensedUsers] = useState<LicensedUser[]>([]);
  const [presentationQuestions, setPresentationQuestions] = useState<GeneratedQuestion[]>([]);

  // State for Matrix Analysis Page
  const [analyzedFile, setAnalyzedFile] = useState<File | null>(null);
  const [analysisSource, setAnalysisSource] = useState<'file' | 'json' | null>(null);
  const [analysisResults, setAnalysisResults] = useState<GeneratedQuestion[]>([]);
  const [generatedSimilarTests, setGeneratedSimilarTests] = useState<GeneratedQuestion[][]>([]);
  const [matrixNumberOfTests, setMatrixNumberOfTests] = useState<number>(1);
  const [matrixCurrentTestIndex, setMatrixCurrentTestIndex] = useState<number>(0);

  // Ref to track generated questions count
  const generatedCountRef = useRef(0);

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const addNotification = (type: NotificationType, message: string, duration = 5000) => {
    const id = Date.now();
    setNotifications(prev => [...prev.filter(n => n.message !== message), { id, type, message }]);
    if (duration > 0) {
      setTimeout(() => {
          removeNotification(id);
      }, duration);
    }
  };
  
  useEffect(() => {
    let storedDeviceId = localStorage.getItem('math-app-device-id');
    if (!storedDeviceId) {
      storedDeviceId = crypto.randomUUID();
      localStorage.setItem('math-app-device-id', storedDeviceId);
    }
    setDeviceId(storedDeviceId);

    let loadedUsers: LicensedUser[] = [];
    try {
        const storedUsers = localStorage.getItem('math-app-user-list');
        if (storedUsers) {
            loadedUsers = JSON.parse(storedUsers);
            setLicensedUsers(loadedUsers);
        }
    } catch(e) {
        console.error("Failed to load user list", e);
    }

    const storedLicenseKey = localStorage.getItem('math-app-license-key');
    const storedSchool = localStorage.getItem('math-app-school-name') || '';
    const storedTeacher = localStorage.getItem('math-app-teacher-name') || '';
    
    setSchoolName(storedSchool);
    setTeacherName(storedTeacher);

    let isLicenseValid = false;
    if (storedLicenseKey && storedSchool && storedTeacher) {
      try {
        const expectedKey = btoa(`${storedDeviceId}-${SECRET_SALT}`);
        if (storedLicenseKey === expectedKey) {
            const userInList = loadedUsers.some(
              user => user.deviceId === storedDeviceId && user.school === storedSchool && user.teacher === storedTeacher
            );
            if (userInList) {
                isLicenseValid = true;
            }
        }
      } catch (e) {
        console.error("Error validating license key", e);
        isLicenseValid = false;
      }
    }
    
    if (isLicenseValid) {
      setIsLicensed(true);
    } else {
      setIsLicensed(false);
      if (storedLicenseKey || storedSchool || storedTeacher) {
          localStorage.removeItem('math-app-license-key');
          localStorage.removeItem('math-app-school-name');
          localStorage.removeItem('math-app-teacher-name');
      }
    }
  }, []);
  
  useEffect(() => {
    try {
      const savedBank = localStorage.getItem('mathTestGenerator-questionBank');
      if (savedBank) {
        setQuestionBank(JSON.parse(savedBank));
      }
    } catch (error) {
      console.error("Failed to load question bank from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('mathTestGenerator-questionBank', JSON.stringify(questionBank));
    } catch (error) {
      console.error("Failed to save question bank to localStorage", error);
    }
  }, [questionBank]);

  useEffect(() => {
    try {
      localStorage.setItem('math-app-user-list', JSON.stringify(licensedUsers));
    } catch (error) {
      console.error("Failed to save user list to localStorage", error);
    }
  }, [licensedUsers]);

  const handleActivateLicense = (key: string, school: string, teacher: string): boolean => {
    try {
      const expectedKey = btoa(`${deviceId}-${SECRET_SALT}`);
      if (key.trim() === expectedKey) {
        localStorage.setItem('math-app-license-key', key.trim());
        localStorage.setItem('math-app-school-name', school);
        localStorage.setItem('math-app-teacher-name', teacher);
        
        setSchoolName(school);
        setTeacherName(teacher);
        setIsLicensed(true);
        
        setLicensedUsers(prevUsers => {
            const userExists = prevUsers.some(u => u.deviceId === deviceId);
            if (userExists) {
                return prevUsers.map(user => 
                    user.deviceId === deviceId ? { ...user, school, teacher } : user
                );
            } else {
                const newUser: LicensedUser = {
                    id: `user-${Date.now()}`,
                    school,
                    teacher,
                    deviceId,
                };
                return [...prevUsers, newUser];
            }
        });

        addNotification('success', 'Kích hoạt bản quyền thành công! Cảm ơn bạn đã sử dụng chương trình.');
        return true;
      } else {
        addNotification('error', 'Mã kích hoạt không hợp lệ. Vui lòng kiểm tra lại.');
        return false;
      }
    } catch (e) {
      console.error("Activation error", e);
      addNotification('error', 'Đã xảy ra lỗi trong quá trình kích hoạt.');
      return false;
    }
  };
  
  const handleDeleteUser = (userId: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa người dùng này? Thao tác này sẽ vô hiệu hóa bản quyền trên thiết bị tương ứng nếu đang được kích hoạt.')) {
        const userToDelete = licensedUsers.find(u => u.id === userId);
        
        setLicensedUsers(prevUsers => prevUsers.filter(u => u.id !== userId));
        
        if (userToDelete && userToDelete.deviceId === deviceId && userToDelete.school === schoolName && userToDelete.teacher === teacherName) {
            localStorage.removeItem('math-app-license-key');
            localStorage.removeItem('math-app-school-name');
            localStorage.removeItem('math-app-teacher-name');
            setIsLicensed(false);
            addNotification('info', 'Đã xóa người dùng và vô hiệu hóa bản quyền trên máy này.');
        } else {
            addNotification('info', 'Đã xóa người dùng khỏi danh sách.');
        }
    }
  };

  const handleAddToBank = (question: GeneratedQuestion) => {
      setQuestionBank(prevBank => {
          const isDuplicate = prevBank.some(
              q => q.questionText === question.questionText && q.topicId === question.topicId
          );
          if (isDuplicate) {
              addNotification('alert', "Câu hỏi này đã có trong bank.");
              return prevBank;
          }
          const newBankQuestion = { ...question, id: `qBank-${Date.now()}-${Math.random().toString(36).substr(2, 9)}` };
          addNotification('success', "Đã lưu câu hỏi vào bank.");
          return [newBankQuestion, ...prevBank];
      });
  };
  
  const handleImportToBank = (importedQuestions: Omit<GeneratedQuestion, 'id'>[]) => {
      let addedCount = 0;
      let skippedCount = 0;

      const newQuestions = importedQuestions.filter(newQ => {
          const isDuplicate = questionBank.some(
              existingQ => existingQ.questionText === newQ.questionText && existingQ.topicId === newQ.topicId
          );
          if (isDuplicate) {
              skippedCount++;
              return false;
          }
          return true;
      }).map(q => {
          addedCount++;
          return {
              ...q,
              id: `qBank-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
          };
      });

      if (newQuestions.length > 0) {
          setQuestionBank(prevBank => [...newQuestions, ...prevBank]);
      }
      
      addNotification('info', `Hoàn tất import! Thêm: ${addedCount}. Bỏ qua: ${skippedCount}.`);
  };

  const handleUpdateQuestionInBank = (updatedQuestion: GeneratedQuestion) => {
      setQuestionBank(prevBank =>
          prevBank.map(q => (q.id === updatedQuestion.id ? updatedQuestion : q))
      );
  };

  const handleDeleteFromBank = (questionId: string) => {
      if (window.confirm('Bạn có chắc chắn muốn xóa câu hỏi này khỏi bank?')) {
          setQuestionBank(prevBank => prevBank.filter(q => q.id !== questionId));
      }
  };

  const handleResetSelection = () => {
    setSelectedTopicIds(new Set());
    setTopicQuestionConfig({});
    setConfigErrors({});
  };

  const handleClearTest = () => {
    setGeneratedQuestions([]);
    setCurrentTestIndex(0);
    setPresentationQuestions([]);
  };

  const handleCreateTestFromBank = (questions: GeneratedQuestion[]) => {
      if (questions.length === 0) {
          addNotification('alert', 'Vui lòng chọn ít nhất một câu hỏi từ bank để tạo đề.');
          return;
      }
      handleResetSelection();
      handleClearTest();
      setGeneratedQuestions([questions]);
      setNumberOfTests(1);
      setCurrentTestIndex(0);
      setActiveView('Tạo đề');
  };

  const handleStartPresentation = (questions: GeneratedQuestion[]) => {
      if (questions.length === 0) {
          addNotification('alert', "Không có câu hỏi nào để trình chiếu.");
          return;
      }
      setPresentationQuestions(questions);
      setActiveView('Trình chiếu');
  };

  const handleLoadPresentationFromFile = (questions: GeneratedQuestion[]) => {
      setPresentationQuestions(questions);
      setActiveView('Trình chiếu');
  };


    const handleDistributionConfigChange = (
        field: 'totalQuestions' | keyof DifficultyLevelCounts | keyof QuestionConfig,
        value: number
    ) => {
        setDistributionConfig(prev => {
            const numValue = value >= 0 ? value : 0;
            if (field === 'totalQuestions') {
                return { ...prev, totalQuestions: numValue };
            }
            if (field in prev.percentages) {
                const newPercentages = { ...prev.percentages, [field]: numValue };
                return { ...prev, percentages: newPercentages };
            }
            if (field in prev.typePercentages) {
                const newTypePercentages = { ...prev.typePercentages, [field]: numValue };
                return { ...prev, typePercentages: newTypePercentages };
            }
            return prev;
        });
    };

  const handleTestInfoChange = (field: keyof TestInfo, value: string | number) => {
    setTestInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleTopicSelect = (topicId: string, isSelected: boolean) => {
    setSelectedTopicIds(prevIds => {
      const newIds = new Set(prevIds);
      if (isSelected) {
        newIds.add(topicId);
        if (!topicQuestionConfig[topicId]) {
            setTopicQuestionConfig(prevConfig => ({
                ...prevConfig,
                [topicId]: JSON.parse(JSON.stringify(initialQuestionConfig))
            }));
        }
      } else {
        newIds.delete(topicId);
        setTopicQuestionConfig(prevConfig => {
          const newConfig = { ...prevConfig };
          delete newConfig[topicId];
          return newConfig;
        });
        setConfigErrors(prevErrors => {
          const newErrors = { ...prevErrors };
          delete newErrors[topicId];
          return newErrors;
        });
      }
      return newIds;
    });
  };

  const handleTopicConfigChange = (topicId: string, type: keyof QuestionConfig, level: keyof DifficultyLevelCounts, value: number) => {
    const numValue = value >= 0 ? value : 0;

    setTopicQuestionConfig(prev => {
        const newConfig = JSON.parse(JSON.stringify(prev));
        if (!newConfig[topicId]) {
            newConfig[topicId] = JSON.parse(JSON.stringify(initialQuestionConfig));
        }
        newConfig[topicId][type][level] = numValue;
        return newConfig;
    });
    
    setConfigErrors(prev => {
        const newErrors = JSON.parse(JSON.stringify(prev));
        if (numValue > MAX_QUESTIONS_PER_TYPE_PER_LEVEL) {
            if (!newErrors[topicId]) newErrors[topicId] = {};
            if (!newErrors[topicId][type]) newErrors[topicId][type] = {};
            newErrors[topicId][type][level] = `Tối đa ${MAX_QUESTIONS_PER_TYPE_PER_LEVEL}.`;
        } else {
            if (newErrors[topicId]?.[type]?.[level]) {
                delete newErrors[topicId][type][level];
                if (Object.keys(newErrors[topicId][type]).length === 0) delete newErrors[topicId][type];
                if (Object.keys(newErrors[topicId]).length === 0) delete newErrors[topicId];
            }
        }
        return newErrors;
    });
  };

  const selectedTopics = useMemo(() => {
    const topics: TopicNode[] = [];
    const findTopics = (nodes: TopicNode[]) => {
      for (const node of nodes) {
        if (selectedTopicIds.has(node.id)) {
          topics.push(node);
        }
        if (node.children) {
          findTopics(node.children);
        }
      }
    };
    findTopics(curriculum);
    return topics;
  }, [selectedTopicIds, curriculum]);

  const handleGenerateTest = async (
    configToUse: Record<string, QuestionConfig> = topicQuestionConfig,
    topicsToUse: TopicNode[] = selectedTopics,
    numTestsToUse: number = numberOfTests
) => {
    if (Object.keys(configErrors).length > 0) {
      addNotification('error', "Vui lòng sửa các lỗi trong cấu hình số lượng câu hỏi trước khi tạo đề.");
      return;
    }
    
    const totalQuestions = Object.values(configToUse).reduce((sum: number, config: QuestionConfig) => {
        return sum + Object.values(config).reduce((typeSum: number, levels: DifficultyLevelCounts) => {
            return typeSum + Object.values(levels).reduce((levelSum: number, count: number) => levelSum + count, 0);
        }, 0);
    }, 0);

    if (topicsToUse.length === 0 || totalQuestions === 0) {
      if(topicsToUse.length === 0) addNotification('error', 'Vui lòng chọn chủ đề.');
      if(totalQuestions === 0) addNotification('error', 'Vui lòng nhập số lượng câu hỏi.');
      return;
    }

    setIsLoading(true);
    setGeneratedQuestions(Array.from({ length: numTestsToUse }, () => []));
    setCurrentTestIndex(0);
    generatedCountRef.current = 0;

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const levelMap: Record<keyof DifficultyLevelCounts, string> = {
        recognition: 'Nhận biết',
        comprehension: 'Thông hiểu',
        application: 'Vận dụng',
        highApplication: 'Vận dụng cao'
      };
      
      const typeMap: Record<keyof QuestionConfig, string> = {
        multipleChoice: 'Trắc nghiệm',
        trueFalse: 'Đúng/Sai',
        shortAnswer: 'Trả lời ngắn',
        essay: 'Tự luận',
        matching: 'Nối cột',
      };

      let allRequests: { topicId: string; topicName: string; type: string; level: string; count: number }[] = [];
      
      topicsToUse.forEach(topic => {
          const config = configToUse[topic.id];
          if (!config) return;
          
          (Object.keys(config) as Array<keyof QuestionConfig>).forEach(type => {
              const levels = config[type];
              (Object.keys(levels) as Array<keyof DifficultyLevelCounts>).forEach(level => {
                  const count = levels[level];
                  if (count > 0) {
                      allRequests.push({
                          topicId: topic.id,
                          topicName: topic.name,
                          type: typeMap[type],
                          level: levelMap[level],
                          count: count
                      });
                  }
              });
          });
      });
      
      if (allRequests.length === 0) {
        addNotification('error', 'Vui lòng nhập số lượng câu hỏi cho ít nhất một chủ đề.');
        setIsLoading(false);
        return;
      }

      const batches: string[] = [];
      let currentBatch: string[] = [];
      let currentBatchCount = 0;

      allRequests.forEach(req => {
          let remaining = req.count;
          while (remaining > 0) {
              const take = Math.min(remaining, QUESTIONS_PER_BATCH - currentBatchCount);
              currentBatch.push(`- Chủ đề "[${req.topicId}] ${req.topicName}": ${take} câu ${req.type} mức độ ${req.level}`);
              currentBatchCount += take;
              remaining -= take;

              if (currentBatchCount >= QUESTIONS_PER_BATCH) {
                  batches.push(currentBatch.join('\n'));
                  currentBatch = [];
                  currentBatchCount = 0;
              }
          }
      });
      if (currentBatch.length > 0) {
          batches.push(currentBatch.join('\n'));
      }
      
      const basePromptTemplate = `Hãy tạo các câu hỏi toán học ở định dạng JSON dựa trên yêu cầu:\n{BATCH_REQUEST}
      \nYêu cầu định dạng JSON:
      - Kết quả là một mảng các đối tượng JSON.
      - Các trường bắt buộc: "topicId", "topicName", "type", "difficulty", "questionText", "answer", "solution".
      - "topicId" và "topicName" phải khớp với chủ đề đã yêu cầu.
      - "type" (multipleChoice, trueFalse, shortAnswer, essay, matching).
      - "difficulty" (recognition, comprehension, application, highApplication).
      - "questionText": Nội dung câu hỏi.
      - "options": Mảng 4 chuỗi cho trắc nghiệm (KHÔNG có tiền tố A,B).
      - "propositions": Mảng 4 đối tượng {text, topicAnalysis} cho Đúng/Sai.
      - "matchingPrompts": Mảng 4 chuỗi nội dung cho Cột A (bắt buộc nếu là dạng nối cột).
      - "matchingAnswers": Mảng 4 chuỗi nội dung cho Cột B (bắt buộc nếu là dạng nối cột).
      - "answer": Đáp án đúng (A, B, C, D hoặc chuỗi).
      - "solution": Lời giải chi tiết từng bước (bắt buộc).
      - Toán học dùng LaTeX $...$.`;

      setLoadingMessage(`Đang tạo... (0/${totalQuestions * numTestsToUse} câu)`);

      const processBatch = async (testIdx: number, batchRequest: string) => {
         const prompt = basePromptTemplate.replace('{BATCH_REQUEST}', batchRequest) + `\n\n**Lưu ý:** Đây là đề số ${testIdx + 1}, hãy tạo nội dung khác biệt.`;
         
         try {
             const response = await ai.models.generateContent({
                model: 'gemini-3-pro-preview',
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                topicId: { type: Type.STRING },
                                topicName: { type: Type.STRING },
                                type: { type: Type.STRING },
                                difficulty: { type: Type.STRING },
                                questionText: { type: Type.STRING },
                                options: { type: Type.ARRAY, items: { type: Type.STRING } },
                                propositions: {
                                    type: Type.ARRAY,
                                    items: { 
                                        type: Type.OBJECT,
                                        properties: {
                                            text: { type: Type.STRING },
                                            topicAnalysis: { type: Type.STRING }
                                        },
                                        required: ['text', 'topicAnalysis']
                                    }
                                },
                                matchingPrompts: { type: Type.ARRAY, items: { type: Type.STRING } },
                                matchingAnswers: { type: Type.ARRAY, items: { type: Type.STRING } },
                                answer: { type: Type.STRING },
                                solution: { type: Type.STRING },
                            },
                            required: ['topicId', 'topicName', 'type', 'difficulty', 'questionText', 'answer', 'solution']
                        }
                    }
                }
             });

             const json = JSON.parse(response.text.trim());
             if (Array.isArray(json)) {
                 const newQuestions = sanitizeQuestions(json).map((q, idx) => ({ 
                      ...q, 
                      id: `test${testIdx}-q-${Date.now()}-${Math.random().toString(36).substr(2, 5)}` 
                  }));
                 
                 if (newQuestions.length > 0) {
                     setGeneratedQuestions(prev => {
                          const newState = [...prev];
                          newState[testIdx] = [...(newState[testIdx] || []), ...newQuestions];
                          return newState;
                      });
                      generatedCountRef.current += newQuestions.length;
                      setLoadingMessage(`Đang tạo... (${generatedCountRef.current}/${totalQuestions * numTestsToUse} câu)`);
                 }
             }
         } catch (e) {
             console.error("Batch error", e);
         }
      };

      // Limit concurrency
      const activePromises: Promise<void>[] = [];
      const MAX_CONCURRENT = 3;

      for (let testIdx = 0; testIdx < numTestsToUse; testIdx++) {
          for (const batchRequest of batches) {
              if (activePromises.length >= MAX_CONCURRENT) {
                  await Promise.race(activePromises);
              }
              const p = processBatch(testIdx, batchRequest).then(() => {
                  activePromises.splice(activePromises.indexOf(p), 1);
              });
              activePromises.push(p);
          }
      }
      await Promise.all(activePromises);

      setGeneratedQuestions(prev => {
          const totalGenerated = prev.flat().length;
          if (totalGenerated > 0) {
              addNotification('success', `Đã tạo xong ${prev.length} đề!`);
          } else {
              addNotification('error', `Không tạo được câu hỏi nào. Vui lòng thử lại.`);
          }
          return prev;
      });

    } catch (e) {
      console.error(e);
      addNotification('error', 'Lỗi khi tạo đề. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
      setLoadingMessage('');
    }
  };
  
    const handleAutoDistribute = async () => {
        if (selectedTopics.length === 0) {
            addNotification('error', 'Vui lòng chọn ít nhất một chủ đề để phân bổ.');
            return;
        }

        setIsLoading(true);
        setLoadingMessage('Đang phân bổ câu hỏi...');

        const prompt = `Bạn là một chuyên gia giáo dục toán học, có nhiệm vụ tạo ra một ma trận đề thi cân bằng và hợp lý.
        Dựa trên danh sách các chủ đề đã chọn, tổng số câu hỏi và tỉ lệ phân bổ các mức độ khó và các loại câu hỏi, hãy điền số lượng câu hỏi cho từng loại (trắc nghiệm, đúng/sai, trả lời ngắn, tự luận, nối cột) và từng mức độ khó (nhận biết, thông hiểu, vận dụng, vận dụng cao) vào các chủ đề tương ứng.

        Yêu cầu:
        1. Tổng số câu hỏi của tất cả các chủ đề cộng lại phải chính xác là ${distributionConfig.totalQuestions}.
        2. Tỉ lệ chung của các mức độ khó phải tuân thủ nghiêm ngặt: Nhận biết ${distributionConfig.percentages.recognition}%, Thông hiểu ${distributionConfig.percentages.comprehension}%, Vận dụng ${distributionConfig.percentages.application}%, Vận dụng cao ${distributionConfig.percentages.highApplication}%.
        3. Tỉ lệ chung của các loại câu hỏi phải tuân thủ nghiêm ngặt: Trắc nghiệm ${distributionConfig.typePercentages.multipleChoice}%, Đúng/Sai ${distributionConfig.typePercentages.trueFalse}%, Trả lời ngắn ${distributionConfig.typePercentages.shortAnswer}%, Tự luận ${distributionConfig.typePercentages.essay}%, Nối cột ${distributionConfig.typePercentages.matching}%.
        4. Phân bổ câu hỏi một cách logic vào các chủ đề. Các chủ đề quan trọng hơn có thể có nhiều câu hỏi hơn.
        5. Kết quả trả về phải là một đối tượng JSON, không có bất kỳ giải thích nào khác.

        Danh sách chủ đề đã chọn:
        ${JSON.stringify(selectedTopics.map(t => ({ id: t.id, name: t.name })))}

        Định dạng JSON đầu ra:
        - Một mảng các đối tượng.
        - Mỗi đối tượng có hai khóa: "topicId" (string) và "config" (object).
        - Khóa "config" chứa các khóa "multipleChoice", "trueFalse", "shortAnswer", "essay", "matching".
        - Mỗi khóa này lại chứa các khóa "recognition", "comprehension", "application", "highApplication" với giá trị là số lượng câu hỏi (number).`;
        
        const difficultyLevelCountsSchema = {
            type: Type.OBJECT,
            properties: {
                recognition: { type: Type.INTEGER },
                comprehension: { type: Type.INTEGER },
                application: { type: Type.INTEGER },
                highApplication: { type: Type.INTEGER },
            },
            required: ['recognition', 'comprehension', 'application', 'highApplication']
        };

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-3-pro-preview',
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                topicId: { type: Type.STRING },
                                config: {
                                    type: Type.OBJECT,
                                    properties: {
                                        multipleChoice: difficultyLevelCountsSchema,
                                        trueFalse: difficultyLevelCountsSchema,
                                        shortAnswer: difficultyLevelCountsSchema,
                                        essay: difficultyLevelCountsSchema,
                                        matching: difficultyLevelCountsSchema,
                                    },
                                    required: ['multipleChoice', 'trueFalse', 'shortAnswer', 'essay', 'matching']
                                }
                            },
                            required: ['topicId', 'config']
                        }
                    }
                }
            });
            
            const jsonText = response.text.trim();
            const parsedResponse = JSON.parse(jsonText);

            if (Array.isArray(parsedResponse)) {
                const aiConfigMap = new Map<string, QuestionConfig>();
                parsedResponse.forEach((item: { topicId: string, config: QuestionConfig }) => {
                    aiConfigMap.set(item.topicId, item.config);
                });

                setTopicQuestionConfig(prevConfig => {
                    const newConfig = { ...prevConfig };
                    selectedTopics.forEach(topic => {
                        if (aiConfigMap.has(topic.id)) {
                            newConfig[topic.id] = aiConfigMap.get(topic.id)!;
                        } else {
                            newConfig[topic.id] = JSON.parse(JSON.stringify(initialQuestionConfig));
                        }
                    });
                    return newConfig;
                });
                setConfigErrors({});
            } else {
              throw new Error("AI did not return a valid array for distribution.");
            }
        } catch (e) {
            console.error(e);
            addNotification('error', 'Không thể tự động phân bổ câu hỏi. Vui lòng thử lại.');
        } finally {
            setIsLoading(false);
        }
    };

  const flattenedCurriculum = useMemo(() => {
    const topics: { id: string; name: string }[] = [];
    const flatten = (nodes: TopicNode[], parentName = '') => {
        for (const node of nodes) {
            const currentName = parentName ? `${parentName} > ${node.name}` : node.name;
            if (!node.children || node.children.length === 0) {
                topics.push({ id: node.id, name: currentName });
            }
            if (node.children) {
                flatten(node.children, currentName);
            }
        }
    };
    flatten(curriculum);
    return topics;
  }, [curriculum]);

    const handleAddNode = (parentId: string) => {
        const newNode: TopicNode = {
            id: `${parentId}.${Date.now()}`,
            name: 'Mục mới',
            children: []
        };
        const updateNodes = (nodes: TopicNode[]): TopicNode[] => {
            return nodes.map(node => {
                if (node.id === parentId) {
                    return { ...node, children: [...(node.children || []), newNode] };
                }
                if (node.children) {
                    return { ...node, children: updateNodes(node.children) };
                }
                return node;
            });
        };
        setCurriculum(updateNodes(curriculum));
    };

    const handleDeleteNode = (nodeId: string) => {
        const deleteNodes = (nodes: TopicNode[]): TopicNode[] => {
            return nodes.filter(node => node.id !== nodeId).map(node => ({
                ...node,
                children: node.children ? deleteNodes(node.children) : undefined
            }));
        };
        setCurriculum(deleteNodes(curriculum));
    };

    const handleEditNode = (nodeId: string, newName: string) => {
        const name = prompt("Nhập tên mới:", newName);
        if (!name) return;
        const editNodes = (nodes: TopicNode[]): TopicNode[] => {
            return nodes.map(node => {
                if (node.id === nodeId) {
                    return { ...node, name };
                }
                if (node.children) {
                    return { ...node, children: editNodes(node.children) };
                }
                return node;
            });
        };
        setCurriculum(editNodes(curriculum));
    };

    const handleImportMatrix = (data: { topicId: string, config: QuestionConfig }[]) => {
        setTopicQuestionConfig(prev => {
           const newConfig = { ...prev };
           const newSelectedIds = new Set(selectedTopicIds);
           
           data.forEach(item => {
               newConfig[item.topicId] = item.config;
               newSelectedIds.add(item.topicId);
           });
           
           setSelectedTopicIds(newSelectedIds);
           return newConfig;
       });
       setActiveView('Tạo đề');
       addNotification('success', `Đã nhập cấu hình cho ${data.length} chủ đề.`);
    };

    const handleUpdateQuestion = (index: number, updatedQuestion: GeneratedQuestion) => {
        setGeneratedQuestions(prev => {
            const newQuestions = [...prev];
            if (newQuestions[currentTestIndex]) {
                const newTest = [...newQuestions[currentTestIndex]];
                newTest[index] = updatedQuestion;
                newQuestions[currentTestIndex] = newTest;
            }
            return newQuestions;
        });
    };

    const handleReorderQuestion = (dragIndex: number, hoverIndex: number) => {
        setGeneratedQuestions(prev => {
            const newQuestions = [...prev];
            if (newQuestions[currentTestIndex]) {
                const newTest = [...newQuestions[currentTestIndex]];
                const [removed] = newTest.splice(dragIndex, 1);
                newTest.splice(hoverIndex, 0, removed);
                newQuestions[currentTestIndex] = newTest;
            }
            return newQuestions;
        });
    };

    const handleFileAnalyze = async (file: File) => {
        if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
            addNotification('error', 'Chỉ hỗ trợ file ảnh hoặc PDF.');
            return;
        }

        setIsLoading(true);
        setLoadingMessage('Đang phân tích đề thi...');
        setAnalyzedFile(file);
        setAnalysisSource('file');
        setAnalysisResults([]);

        const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve((reader.result as string).split(',')[1]);
            reader.onerror = error => reject(error);
        });

        try {
            const base64Data = await toBase64(file);
            const filePart = { inlineData: { mimeType: file.type, data: base64Data } };
            const curriculumString = JSON.stringify(flattenedCurriculum);

            const prompt = `Bạn là một trợ lý giáo viên toán chuyên nghiệp. Nhiệm vụ của bạn là phân tích một tệp đề thi và trích xuất TOÀN BỘ các câu hỏi một cách chính xác.

            **QUY TRÌNH PHÂN TÍCH:**
            1.  **Xác định từng câu hỏi:** Đọc kỹ tệp và xác định ranh giới của mỗi câu hỏi.
            2.  **Trích xuất nội dung văn bản (QUAN TRỌNG NHẤT):**
                *   **\`questionText\` (BẮT BUỘC):** Lấy TOÀN BỘ nội dung, lời dẫn của câu hỏi.
                *   **\`options\` (Nếu là trắc nghiệm):** Mảng 4 chuỗi, KHÔNG chứa tiền tố "A.", "B.".
                *   **\`propositions\` (Nếu là Đúng/Sai):** Phải là một mảng các đối tượng. Mỗi đối tượng phải có hai trường: \`"text"\` (nội dung mệnh đề) và \`"topicAnalysis"\` (phân tích ngắn gọn về kiến thức cụ thể mà mệnh đề đó kiểm tra).
                *   **\`matchingPrompts\` & \`matchingAnswers\` (Nếu là Nối cột):** BẮT BUỘC trích xuất danh sách nội dung Cột A vào \`matchingPrompts\` và Cột B vào \`matchingAnswers\`.
            3.  **Phân loại câu hỏi:**
                *   Xác định \`type\` (multipleChoice, trueFalse, shortAnswer, essay, matching).
                *   Xác định \`difficulty\` (recognition, comprehension, application, highApplication).
                *   Xác định \`topicId\` và \`topicName\` từ danh sách chủ đề được cung cấp. Hãy chọn topic phù hợp nhất.
            4.  **Trích xuất hình ảnh (NẾU CÓ):**
                *   Nếu có Đồ thị, Bảng biểu, hoặc Bảng biến thiên, tạo đối tượng \`visual\`.
                *   \`visual.type\` phải là 'graph', 'table', hoặc 'variation_table'.
                *   \`visual.data\` **LUÔN LÀ MỘT CHUỖI (STRING)**.
                    *   \`graph\`: "data" là chuỗi phương trình (ví dụ: "x^3 - 3*x").
                    *   \`table\` / \`variation_table\`: "data" là một **CHUỖI JSON** hợp lệ.
            5.  **Trích xuất Đáp án & Lời giải:**
                *   Lấy \`answer\` và \`solution\`. Tự tạo lời giải ngắn gọn nếu không có sẵn.
            6.  **Mô tả kiến thức (QUAN TRỌNG):**
                *   Thêm một trường \`knowledgeDetail\` là một chuỗi văn bản mô tả chi tiết và cụ thể về kiến thức toán học mà câu hỏi này đang kiểm tra. Mô tả này phải cô đọng nhưng đầy đủ thông tin để AI có thể dựa vào đó tạo câu hỏi tương tự.
            7.  **Định dạng Toán học:** TOÀN BỘ các biểu thức toán học BẮT BUỘC phải được đặt trong dấu đô la (\`$...\` hoặc \`$$...$$\`).

            **Danh sách chủ đề:**
            ${curriculumString}

            **ĐỊNH DẠNG ĐẦU RA:**
            Chỉ trả về một mảng JSON chứa các đối tượng câu hỏi đã được phân tích. KHÔNG thêm bất kỳ văn bản giải thích nào.`;

            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-3-pro-preview',
                contents: { parts: [filePart, { text: prompt }] },
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                topicId: { type: Type.STRING },
                                topicName: { type: Type.STRING },
                                type: { type: Type.STRING },
                                difficulty: { type: Type.STRING },
                                knowledgeDetail: { type: Type.STRING },
                                questionText: { type: Type.STRING },
                                options: { type: Type.ARRAY, items: { type: Type.STRING } },
                                propositions: {
                                  type: Type.ARRAY,
                                  items: {
                                      type: Type.OBJECT,
                                      properties: {
                                          text: { type: Type.STRING },
                                          topicAnalysis: { type: Type.STRING }
                                      },
                                      required: ['text', 'topicAnalysis']
                                  }
                                },
                                matchingPrompts: { type: Type.ARRAY, items: { type: Type.STRING } },
                                matchingAnswers: { type: Type.ARRAY, items: { type: Type.STRING } },
                                answer: { type: Type.STRING },
                                solution: { type: Type.STRING },
                                visual: { 
                                    type: Type.OBJECT, 
                                    properties: { 
                                        type: { type: Type.STRING }, 
                                        data: { type: Type.STRING } 
                                    } 
                                }
                            },
                            required: ['topicId', 'topicName', 'type', 'difficulty', 'questionText', 'answer', 'knowledgeDetail']
                        }
                    }
                }
            });

            const jsonText = response.text.trim();
            const parsedQuestions = JSON.parse(jsonText);
            const sanitized = sanitizeQuestions(parsedQuestions);
            
            setAnalysisResults(sanitized.map((q, i) => ({...q, id: `analyzed-q-${i}`})));
            addNotification('success', `Đã phân tích xong! Tìm thấy ${sanitized.length} câu hỏi.`);

        } catch (e) {
            console.error(e);
            addNotification('error', 'Lỗi khi phân tích file. Vui lòng thử lại với file rõ nét hơn.');
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
        }
    };

    const handleAnalyzeDescription = async (file: File) => {
      if (!['application/pdf', 'image/png', 'image/jpeg', 'image/webp', 'image/heic', 'image/heif'].includes(file.type)) {
           addNotification('alert', 'Hiện tại tính năng phân tích ma trận bằng AI hỗ trợ tốt nhất cho định dạng PDF và Hình ảnh. File Word có thể không được xử lý chính xác.');
           if (file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
               addNotification('error', 'Vui lòng chuyển đổi file Word sang PDF hoặc Ảnh để AI có thể đọc được bảng biểu.');
               return;
           }
      }

      setIsLoading(true);
      setLoadingMessage('Đang phân tích bản mô tả ma trận...');
      
      try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          
          // Helper to convert file to base64
          const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => resolve((reader.result as string).split(',')[1]);
              reader.onerror = error => reject(error);
          });

          const base64Data = await toBase64(file);
          
          const prompt = `Bạn là chuyên gia phân tích chương trình giáo dục. Hãy phân tích tệp tài liệu "Ma trận/Bản đặc tả đề kiểm tra" (PDF/Ảnh) được cung cấp.

          Nhiệm vụ: Trích xuất cấu trúc đề thi, xác định số lượng câu hỏi cho từng Chủ đề, từng Loại câu hỏi và từng Mức độ nhận thức.

          **Danh sách chủ đề chuẩn (ID - Tên):**
          ${JSON.stringify(flattenedCurriculum)}

          **Yêu cầu xử lý:**
          1. **Khớp chủ đề:** Đọc cột "Nội dung/Đơn vị kiến thức" hoặc "Chương/Chủ đề" trong tài liệu và tìm \`id\` tương ứng chính xác nhất trong danh sách chủ đề chuẩn ở trên.
          2. **Xác định Loại câu hỏi & Số lượng:**
             - Dựa vào các cột mức độ (Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao) và các ghi chú trong bảng hoặc cuối trang.
             - Các từ khóa gợi ý loại câu hỏi:
               + "TNKQ", "TN": Trắc nghiệm (multipleChoice).
               + "TN Đ-S", "Đúng sai": Đúng/Sai (trueFalse).
               + "TL", "Tự luận": Tự luận (essay).
               + "TLN", "Trả lời ngắn": Trả lời ngắn (shortAnswer).
               + "Nối": Nối cột (matching).
             - Nếu ô trong bảng chứa số lượng (ví dụ "1", "2") hoặc mã (ví dụ "C1", "C2"), hãy đếm số lượng câu hỏi tương ứng. 
             - *Lưu ý đặc biệt:* Nếu tài liệu có phần "Tổng hợp" hoặc "Lưu ý" ở chân trang (ví dụ: "20 câu TNKQ, 2 câu TN Đ-S..."), hãy ưu tiên phân bổ đúng loại câu hỏi đó vào các chủ đề phù hợp nhất dựa trên nội dung bảng.
          3. **Output:** Trả về JSON là một mảng các đối tượng cấu hình cho từng chủ đề.

          **Định dạng JSON đầu ra:**
          [
            {
              "topicId": "Mã_chủ_đề_trong_danh_sách_chuẩn",
              "config": {
                "multipleChoice": { "recognition": 0, "comprehension": 0, "application": 0, "highApplication": 0 },
                "trueFalse": { "recognition": 0, "comprehension": 0, "application": 0, "highApplication": 0 },
                "shortAnswer": { "recognition": 0, "comprehension": 0, "application": 0, "highApplication": 0 },
                "essay": { "recognition": 0, "comprehension": 0, "application": 0, "highApplication": 0 },
                "matching": { "recognition": 0, "comprehension": 0, "application": 0, "highApplication": 0 }
              }
            }
          ]`;

          const questionConfigSchema = {
              type: Type.OBJECT,
              properties: {
                  multipleChoice: { type: Type.OBJECT, properties: { recognition: { type: Type.INTEGER }, comprehension: { type: Type.INTEGER }, application: { type: Type.INTEGER }, highApplication: { type: Type.INTEGER } } },
                  trueFalse: { type: Type.OBJECT, properties: { recognition: { type: Type.INTEGER }, comprehension: { type: Type.INTEGER }, application: { type: Type.INTEGER }, highApplication: { type: Type.INTEGER } } },
                  shortAnswer: { type: Type.OBJECT, properties: { recognition: { type: Type.INTEGER }, comprehension: { type: Type.INTEGER }, application: { type: Type.INTEGER }, highApplication: { type: Type.INTEGER } } },
                  essay: { type: Type.OBJECT, properties: { recognition: { type: Type.INTEGER }, comprehension: { type: Type.INTEGER }, application: { type: Type.INTEGER }, highApplication: { type: Type.INTEGER } } },
                  matching: { type: Type.OBJECT, properties: { recognition: { type: Type.INTEGER }, comprehension: { type: Type.INTEGER }, application: { type: Type.INTEGER }, highApplication: { type: Type.INTEGER } } }
              }
          };

          const responseSchema = {
              type: Type.ARRAY,
              items: {
                  type: Type.OBJECT,
                  properties: {
                      topicId: { type: Type.STRING },
                      config: questionConfigSchema
                  },
                  required: ["topicId", "config"]
              }
          };

          const response = await ai.models.generateContent({
              model: 'gemini-3-pro-preview',
              contents: {
                  parts: [
                      { inlineData: { mimeType: file.type, data: base64Data } },
                      { text: prompt }
                  ]
              },
              config: {
                  responseMimeType: "application/json",
                  responseSchema: responseSchema
              }
          });

          const jsonText = response.text.trim();
          const result = JSON.parse(jsonText);

          if (Array.isArray(result)) {
              const freshConfig: Record<string, QuestionConfig> = {};
              const newSelectedIds = new Set<string>();

              result.forEach((item: { topicId: string, config: QuestionConfig }) => {
                  if (item.topicId) {
                      freshConfig[item.topicId] = item.config;
                      newSelectedIds.add(item.topicId);
                  }
              });

              setTopicQuestionConfig(freshConfig);
              setSelectedTopicIds(newSelectedIds);
              
              addNotification('success', `Đã phân tích xong! Tìm thấy ${newSelectedIds.size} chủ đề.`);
              setActiveView('Tạo đề'); // Switch to Create Test view to show the result
          } else {
              throw new Error("Invalid JSON format from AI");
          }

      } catch (error) {
          console.error("Error analyzing matrix description:", error);
          addNotification('error', 'Lỗi khi phân tích bản mô tả. Vui lòng thử lại với file rõ nét hơn.');
      } finally {
          setIsLoading(false);
          setLoadingMessage('');
      }
    };

    const handleLoadFromJson = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const json = JSON.parse(e.target?.result as string);
                setAnalysisResults(json);
                addNotification('success', 'Đã tải kết quả phân tích.');
            } catch (err) {
                addNotification('error', 'Lỗi file JSON.');
            }
        };
        reader.readAsText(file);
    };

    const handleUpdateAnalysisResult = (updatedItem: GeneratedQuestion) => {
        setAnalysisResults(prev => prev.map(item => item.id === updatedItem.id ? updatedItem : item));
    };

    const handleUpdateSimilarTestQuestion = (testIndex: number, questionIndex: number, updatedQuestion: GeneratedQuestion) => {
        setGeneratedSimilarTests(prev => {
            const newTests = [...prev];
            if (newTests[testIndex]) {
                const newTest = [...newTests[testIndex]];
                newTest[questionIndex] = updatedQuestion;
                newTests[testIndex] = newTest;
            }
            return newTests;
        });
    };

    const handleGenerateSimilar = async (numTests: number) => {
        if (analysisResults.length === 0) {
            addNotification('error', 'Vui lòng phân tích một đề thi hoặc tải lên file JSON trước khi tạo đề tương tự.');
            return;
        }

        setIsLoading(true);
        setGeneratedSimilarTests([]); // Reset previous results
        setMatrixCurrentTestIndex(0);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            // Helper to chunk the questions
            const chunkArray = <T,>(arr: T[], size: number): T[][] => {
                const chunks: T[][] = [];
                for (let i = 0; i < arr.length; i += size) {
                    chunks.push(arr.slice(i, i + size));
                }
                return chunks;
            };
            
            // Use smaller batches for similarity generation to ensure quality/context fit
            const BATCH_SIZE = 3; 
            const questionChunks = chunkArray(analysisResults, BATCH_SIZE);
            
            for (let testIdx = 0; testIdx < numTests; testIdx++) {
                setLoadingMessage(`Đang tạo đề tương tự ${testIdx + 1}/${numTests}...`);
                
                let currentTestQuestions: GeneratedQuestion[] = [];
                
                // Process chunks in parallel for this test
                const chunkPromises = questionChunks.map(async (chunk) => {
                     const prompt = `Bạn là chuyên gia tạo đề toán. Dựa vào nhóm câu hỏi gốc dưới đây, hãy tạo ra các câu hỏi tương tự HOÀN TOÀN MỚI.

                      Yêu cầu BẮT BUỘC:
                      1. **Nội dung mới:** Số liệu, hàm số, ngữ cảnh phải khác biệt so với câu gốc nhưng vẫn kiểm tra cùng kiến thức và mức độ.
                      2. **Giữ nguyên cấu trúc:** Giữ nguyên Loại (type), Độ khó (difficulty), và Chủ đề (topicId, topicName) của từng câu.
                      3. **Kiến thức:** Dựa vào trường "knowledgeDetail" (nếu có) trong câu gốc để tạo câu hỏi sát với mục tiêu kiểm tra.
                      4. **Đáp án & Lời giải:** Tính toán lại chính xác "answer" và "solution" cho câu hỏi mới.
                      5. **Hình ảnh:** Nếu câu gốc có "visual", hãy tạo "visual" mới với dữ liệu mới tương ứng.
                      6. **Toán học:** Dùng LaTeX trong $...$.
                      7. **Nối cột:** Nếu type='matching', bắt buộc tạo matchingPrompts (Cột A) và matchingAnswers (Cột B).
                      8. **Output:** Trả về MẢNG JSON các câu hỏi mới.

                      Câu hỏi gốc:
                      ${JSON.stringify(chunk)}

                      Đề biến thể số ${testIdx + 1}. Hãy sáng tạo!`;

                      const response = await ai.models.generateContent({
                          model: 'gemini-3-pro-preview',
                          contents: prompt,
                          config: {
                              responseMimeType: "application/json",
                              responseSchema: {
                                  type: Type.ARRAY,
                                  items: {
                                      type: Type.OBJECT,
                                      properties: {
                                          questionText: { type: Type.STRING },
                                          options: { type: Type.ARRAY, items: { type: Type.STRING } },
                                          propositions: {
                                              type: Type.ARRAY,
                                              items: { 
                                                  type: Type.OBJECT,
                                                  properties: {
                                                      text: { type: Type.STRING },
                                                      topicAnalysis: { type: Type.STRING }
                                                  },
                                                  required: ['text', 'topicAnalysis']
                                              }
                                          },
                                          matchingPrompts: { type: Type.ARRAY, items: { type: Type.STRING } },
                                          matchingAnswers: { type: Type.ARRAY, items: { type: Type.STRING } },
                                          answer: { type: Type.STRING },
                                          solution: { type: Type.STRING },
                                          visual: { 
                                              type: Type.OBJECT, 
                                              properties: { 
                                                  type: { type: Type.STRING }, 
                                                  data: { type: Type.STRING } 
                                              } 
                                          },
                                          // Metadata from original
                                          type: { type: Type.STRING },
                                          difficulty: { type: Type.STRING },
                                          topicId: { type: Type.STRING },
                                          topicName: { type: Type.STRING },
                                          knowledgeDetail: { type: Type.STRING },
                                      },
                                      required: ['questionText', 'answer', 'solution', 'type', 'difficulty', 'topicId']
                                  }
                              }
                          }
                      });
                      return response.text;
                });

                const results = await Promise.all(chunkPromises);
                
                results.forEach(text => {
                    try {
                        const json = JSON.parse(text);
                        if (Array.isArray(json)) {
                            currentTestQuestions = [...currentTestQuestions, ...sanitizeQuestions(json)];
                        }
                    } catch (e) {
                        console.error("JSON parse error", e);
                    }
                });
                
                // Assign IDs
                const finalQuestions = currentTestQuestions.map((q, idx) => ({
                    ...q,
                    id: `sim-${testIdx}-${Date.now()}-${idx}`
                }));

                setGeneratedSimilarTests(prev => [...prev, finalQuestions]);
            }
            
            addNotification('success', `Đã tạo thành công ${numTests} đề tương tự!`);

        } catch (e) {
            console.error(e);
            addNotification('error', 'Có lỗi xảy ra khi tạo đề tương tự.');
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
        }
    };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
        <Header activeTab={activeView} onTabChange={setActiveView} isLicensed={isLicensed} />
        <div className="flex-grow flex overflow-hidden">
            {['Tạo đề', 'Bank'].includes(activeView) && (
                <div className="w-1/4 border-r bg-white min-w-[300px] flex-shrink-0">
                     {activeView === 'Tạo đề' && (
                        <LeftPanel
                            curriculum={curriculum}
                            selectedIds={selectedTopicIds}
                            onTopicSelect={handleTopicSelect}
                            onAddNode={handleAddNode}
                            onDeleteNode={handleDeleteNode}
                            onEditNode={handleEditNode}
                        />
                     )}
                     {activeView === 'Bank' && (
                         <div className="p-4 text-slate-500 italic text-center">
                             (Cây chủ đề được tích hợp trong giao diện Bank)
                         </div>
                     )}
                </div>
            )}
            
            <div className="flex-grow overflow-hidden bg-slate-50">
                {activeView === 'Giới thiệu' && <Introduction onNavigate={setActiveView} />}
                
                {activeView === 'Hướng dẫn' && <div className="p-4 h-full"><Instructions /></div>}

                {activeView === 'Tạo đề' && (
                    <RightPanel
                        selectedTopics={selectedTopics}
                        onGenerateTest={() => handleGenerateTest()}
                        generatedQuestions={generatedQuestions}
                        isLoading={isLoading}
                        loadingMessage={loadingMessage}
                        onClearTest={handleClearTest}
                        onResetSelection={handleResetSelection}
                        topicQuestionConfig={topicQuestionConfig}
                        onTopicConfigChange={handleTopicConfigChange}
                        configErrors={configErrors}
                        isReviewing={isReviewing}
                        currentQuestionIndex={currentQuestionIndex}
                        onStartReview={() => setIsReviewing(true)}
                        onFinishReview={() => setIsReviewing(false)}
                        onNavigateQuestion={(dir) => {
                            if(dir === 'next' && currentQuestionIndex < (generatedQuestions[currentTestIndex]?.length || 0) - 1) setCurrentQuestionIndex(c => c + 1);
                            if(dir === 'prev' && currentQuestionIndex > 0) setCurrentQuestionIndex(c => c - 1);
                        }}
                        onUpdateQuestion={handleUpdateQuestion}
                        onReorderQuestion={handleReorderQuestion}
                        numberOfTests={numberOfTests}
                        onNumberOfTestsChange={setNumberOfTests}
                        currentTestIndex={currentTestIndex}
                        onCurrentTestIndexChange={setCurrentTestIndex}
                        onImportMatrix={handleImportMatrix}
                        testInfo={testInfo}
                        onTestInfoChange={handleTestInfoChange}
                        distributionConfig={distributionConfig}
                        onDistributionConfigChange={handleDistributionConfigChange}
                        onAutoDistribute={handleAutoDistribute}
                        onAddToBank={handleAddToBank}
                        onStartPresentation={() => handleStartPresentation(generatedQuestions[currentTestIndex])}
                        addNotification={addNotification}
                    />
                )}

                {activeView === 'Phân tích ma trận' && (
                    <MatrixAnalysisPanel
                        analyzedFile={analyzedFile}
                        analysisSource={analysisSource}
                        analysisResults={analysisResults}
                        generatedTests={generatedSimilarTests}
                        onFileAnalyze={handleFileAnalyze}
                        onAnalyzeDescription={handleAnalyzeDescription}
                        onLoadFromJson={handleLoadFromJson}
                        onClearAnalysis={() => setAnalysisResults([])}
                        onUpdateAnalysis={handleUpdateAnalysisResult}
                        onUpdateSimilarTestQuestion={handleUpdateSimilarTestQuestion}
                        onGenerateSimilar={handleGenerateSimilar}
                        isLoading={isLoading}
                        loadingMessage={loadingMessage}
                        allTopics={flattenedCurriculum}
                        onStartPresentation={handleStartPresentation}
                        numberOfTests={matrixNumberOfTests}
                        onNumberOfTestsChange={setMatrixNumberOfTests}
                        currentTestIndex={matrixCurrentTestIndex}
                        onCurrentTestIndexChange={setMatrixCurrentTestIndex}
                        testInfo={testInfo}
                        addNotification={addNotification}
                    />
                )}
                
                {activeView === 'Tạo đề tương tự' && (
                     <SimilarTestGeneratorPanel
                        onStartPresentation={handleStartPresentation}
                        addNotification={addNotification}
                    />
                )}

                {activeView === 'Khảo sát hàm số' && (
                    <div className="p-4 h-full"><FunctionAnalyzerPanel addNotification={addNotification} /></div>
                )}

                {activeView === 'Bank' && (
                    <div className="p-4 h-full">
                        <BankPanel
                            bank={questionBank}
                            curriculum={curriculum}
                            onUpdateQuestion={handleUpdateQuestionInBank}
                            onDeleteQuestion={handleDeleteFromBank}
                            onCreateTestFromBank={handleCreateTestFromBank}
                            onImportToBank={handleImportToBank}
                            addNotification={addNotification}
                        />
                    </div>
                )}
                
                {activeView === 'Trình chiếu' && (
                     <PresentationPanel
                        initialQuestions={presentationQuestions}
                        onLoadFromFile={handleLoadPresentationFromFile}
                        onExit={() => setActiveView('Tạo đề')}
                     />
                )}

                {activeView === 'Quản lý người dùng' && (
                     <div className="p-4 h-full"><UserManagementPanel users={licensedUsers} onDeleteUser={handleDeleteUser} /></div>
                )}

                {activeView === 'Bản quyền' && (
                     <div className="p-4 h-full"><LicensePanel isLicensed={isLicensed} deviceId={deviceId} onActivate={handleActivateLicense} addNotification={addNotification} /></div>
                )}

                {activeView === 'Tạo Key' && (
                     <div className="p-4 h-full"><KeyGeneratorPanel addNotification={addNotification} /></div>
                )}
            </div>
        </div>
        <Notifications notifications={notifications} onRemove={removeNotification} />
    </div>
  );
}
